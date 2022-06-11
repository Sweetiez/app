import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button} from '../atoms';
import {Modal} from '../molecules';
import styled from 'styled-components';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const BigSpace = styled.View`
  margin-top: 30px;
`;

const ErrorModal: React.FC<Props> = ({show, setShow}) => {
  const {t} = useTranslation();
  return (
    <Modal
      title={t('errorModal.title')}
      icon="warning"
      show={show}
      setShow={setShow}>
      <Text>{t('errorModal.content')}</Text>
      <BigSpace />
      <Button onPress={() => setShow(false)} text={t('errorModal.close')} />
    </Modal>
  );
};

export default ErrorModal;
