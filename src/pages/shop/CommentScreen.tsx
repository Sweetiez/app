import React, {useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {Title, Back, Button, Error} from '../../atomic/atoms';
import {CommentRequest, ProductCard} from '../../model';
import {Stars, Input} from '../../atomic/molecules';
import {useTranslation} from 'react-i18next';
import colors from '../../assets/colors';
import getIcons from '../../utils/icons';
import {COMMENT_ERROR} from '../../store/constants';
import {commentRequest} from '../../store/api/evaluation';
import {useSelector} from 'react-redux';
import {tokenSelector, userSelector} from '../../store/selectors/user';

interface Props {
  product: ProductCard;
}
const TextArea = styled(Input)``;
const Content = styled.View`
  padding: 5px;
  margin-top: 30px;
`;
const Space = styled.View`
  height: 50px;
`;
const StyledStars = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;
const Icon = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

const CommentScreen: React.FC<Props> = ({route, navigation}) => {
  const {productId} = route.params;
  const {t} = useTranslation();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const validateComment = () => {
    if (!rating) {
      setError(t('comment.errorStar'));
      return false;
    }
    setError(undefined);
    return true;
  };

  const onCommentPress = () => {
    if (validateComment() && user) {
      setLoading(true);
      const data: CommentRequest = {
        author: user.id,
        subject: productId,
        content: comment,
        mark: rating,
      };
      commentRequest(data, token).then(result => {
        setLoading(false);
        if (result === COMMENT_ERROR) {
          setError(t('comment.commentError'));
        } else {
          navigation.reset({index: 1, routes: [{name: 'Home'}]});
        }
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} />
        <Title title={t('comment.title')} />
        <Icon>{getIcons('pen', colors.yellow, 80)}</Icon>
        <Content>
          <StyledStars>
            <Stars
              rating={rating}
              setRating={setRating}
              size={30}
              itemId={rating}
            />
          </StyledStars>
          <TextArea
            onChangeText={setComment}
            value={comment}
            placeholder={t('comment.commentPlaceholder')}
            multiline={true}
            numberOfLines={10}
          />
          <Space />
          {error && <Error content={error} />}
          <Button
            text={t('comment.send')}
            onPress={onCommentPress}
            isLoading={isLoading}
          />
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommentScreen;
