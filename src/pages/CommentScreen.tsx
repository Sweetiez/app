import React, {useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {Title, Back, Button} from './../atomic/atoms';
import {ProductCard} from '../model';
import {Stars, Input} from '../atomic/molecules';
import {useTranslation} from 'react-i18next';
import colors from '../assets/colors';
import getIcons from '../utils/icons';

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
const Error = styled.Text`
  color: ${colors.red};
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;

const CommentScreen: React.FC<Props> = ({route, navigation}) => {
  const {productId} = route.params;
  const {t} = useTranslation();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const validateComment = () => {
    if (!rating) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const onCommentPress = () => {
    if (validateComment()) {
      // TODO send comment on the API
      setLoading(true);
      const data = {
        productId,
        comment,
        rating,
      };
      // then go back
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
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
          {error && <Error>{t('comment.errorStar')}</Error>}
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
