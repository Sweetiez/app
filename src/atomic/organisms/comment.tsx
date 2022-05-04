import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import {Stars} from '../molecules';
import CommentCardModel from '../../model/comment-card-model';

interface Props {
  comment: CommentCardModel;
  navigation: any;
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
  margin-bottom: 10px;
`;
const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 10px;
  padding: 10px;
`;

const Comment: React.FC<Props> = ({comment, navigation}) => {
  const {author, content, date, rating} = comment;

  return (
    <Container>
      <Stars rating={rating} size={15} />
      <Content>{content}</Content>
      <Bottom>
        <Author>{author + ' - '}</Author>
        <Date>{date}</Date>
      </Bottom>
    </Container>
  );
};

export default Comment;
