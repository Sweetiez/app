import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  icon: string;
  title: string;
}

const MainContainer = styled.View`
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 20px;
  margin-top: 60%;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;
const Container = styled.View`
  align-items: center;
  justify-content: center;
`;
const Space = styled.View`
  margin-top: 10px;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.yellow};
`;

const CustomModal: React.FC<Props> = ({
  show,
  setShow,
  title,
  icon,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(!show);
      }}>
      <MainContainer>
        <Container>
          {getIcons(icon, colors.yellow, 70)}
          <Space />
          <Title>{title}</Title>
          <Space />
          {children}
        </Container>
      </MainContainer>
    </Modal>
  );
};

export default CustomModal;
