import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Stars} from '../molecules';
import {Text} from 'react-native';
import CommentCardModel from '../../model/comment-card-model';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';

interface Props {
  comment: CommentCardModel;
}

const Bottom = styled.View`
  flex-direction: row;
`;
const Author = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
const Date = styled.Text`
  font-size: 12px;
`;
const Content = styled.Text`
  margin-top: 10px;
`;
const ShowMore = styled.Text`
  margin-bottom: 10px;
  font-size: 10px;
  margin-top: 5px;
  font-style: italic;
  color: ${colors.grey};
`;
const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 10px;
  padding: 10px;
`;

const Comment: React.FC<Props> = ({comment}) => {
  const {author, content, date, rating} = comment;
  const {t} = useTranslation();
  const [showMore, setShowMore] = useState<boolean>(false);
  const [canShowMore, setCanShowMore] = useState<boolean>(false);
  const onTextLayout = useCallback(
    e => {
      setCanShowMore(e.nativeEvent.lines.length > 4);
    },
    [canShowMore],
  );

  return (
    <Container>
      <Stars rating={rating} size={15} />
      <Content
        onTextLayout={onTextLayout}
        numberOfLines={showMore ? undefined : 5}>
        {content}
      </Content>
      {canShowMore && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <ShowMore>
            {showMore ? t('common.showLess') : t('common.showMore')}
          </ShowMore>
        </TouchableOpacity>
      )}
      <Bottom>
        <Author>{author + ' - '}</Author>
        <Date>{date}</Date>
      </Bottom>
    </Container>
  );
};

export default Comment;
