import React from 'react';
import {Modal, Platform} from 'react-native';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  icon: string;
  title: string;
  hasCross?: boolean;
}

const MainContainer = styled.View`
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 20px;
  elevation: 50;
  margin-top: ${Platform.OS === 'ios' ? '60%' : '30%'};
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

const CrossContainer = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CustomModal: React.FC<Props> = ({
  show,
  setShow,
  title,
  icon,
  children,
  hasCross = false,
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
        {hasCross && (
          <CrossContainer onPress={() => setShow(false)}>
            {getIcons('cross', colors.black, 20)}
          </CrossContainer>
        )}
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
