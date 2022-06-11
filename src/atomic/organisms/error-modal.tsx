import React from 'react';
import {Modal, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {Button} from '../atoms';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const MainContainer = styled.View`
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 10px 0 10px 20px;
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
const BigSpace = styled.View`
  margin-top: 30px;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const ErrorModal: React.FC<Props> = ({show, setShow}) => {
  const {t} = useTranslation();
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
          {getIcons('warning', colors.yellow, 70)}
          <Space />
          <Title>{t('errorModal.title')}</Title>
          <Space />
          <Text>{t('errorModal.content')}</Text>
          <BigSpace />
          <Button onPress={() => setShow(false)} text={t('errorModal.close')} />
        </Container>
      </MainContainer>
    </Modal>
  );
};

export default ErrorModal;
