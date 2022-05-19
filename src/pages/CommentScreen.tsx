import React, {useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {Title, Back, Button} from './../atomic/atoms';
import ProductCardModel from '../model/product-card-model';
import {Stars, Input} from '../atomic/molecules';
import {useTranslation} from 'react-i18next';
import colors from '../assets/colors';
import getIcons from '../utils/icons';

interface Props {
  product: ProductCardModel;
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
  margin: auto;
`;
const Icon = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

const CommentScreen: React.FC<Props> = ({route, navigation}) => {
  const {productId} = route.params;
  const {t} = useTranslation();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onCommentPress = () => {
    // TODO send comment on the API
    setLoading(true);
    const data = {
      productId,
      comment,
      rating,
    };
    // then go back
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
        <Title title={t('comment.title')} />
        <Icon>{getIcons('pen', colors.yellow, 80)}</Icon>
        <Content>
          <TextArea
            onChangeText={setComment}
            value={comment}
            placeholder={t('comment.commentPlaceholder')}
            multiline={true}
            numberOfLines={10}
          />
          <StyledStars>
            <Stars rating={rating} setRating={setRating} size={30} />
          </StyledStars>
          <Space />
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
