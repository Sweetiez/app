import React, {useState} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import RNPickerSelect from 'react-native-picker-select';

import {Button, Error} from '../atoms';
import {Input, Modal} from '../molecules';
import colors from '../../assets/colors';
import {ReportEvaluationRequest} from '../../model';
import {useSelector} from 'react-redux';
import {tokenSelector, userSelector} from '../../store/selectors/user';
import {reportRequest} from '../../store/api/evaluation';
import {REPORT_ALREADY_MADE, REPORT_OK} from '../../store/constants';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  evaluationId: string;
}

const TextArea = styled(Input)``;

const Container = styled.View`
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
`;
const Row = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

const ReportModal: React.FC<Props> = ({show, setShow, evaluationId}) => {
  const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reason, setReason] = useState<string | undefined>(undefined);
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);

  const reportComment = () => {
    setIsLoading(true);
    const data: ReportEvaluationRequest = {
      reason,
      reporterId: user.id,
      evaluationId: evaluationId,
      content: comment,
    };
    reportRequest(data, token).then(response => {
      setIsLoading(false);
      if (response === REPORT_OK) {
        setError(undefined);
        setShow(false);
      } else if (response === REPORT_ALREADY_MADE) {
        setError(t('reportModal.errorAlreadyMade'));
      } else {
        setError(t('reportModal.error'));
      }
    });
  };

  const options = [
    {
      label: t('reportModal.reason.uncivil'),
      value: 'uncivil',
    },
    {
      label: t('reportModal.reason.discrimination'),
      value: 'discrimination',
    },
    {
      label: t('reportModal.reason.localBusiness'),
      value: 'localBusiness',
    },
    {
      label: t('reportModal.reason.illegalContent'),
      value: 'illegalContent',
    },
    {
      label: t('reportModal.reason.other'),
      value: 'other',
    },
  ];

  const basicStyle = {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.yellow,
    placeholderColor: colors.grey,
    borderRadius: 15,
    marginBottom: 10,
    color: 'black',
    paddingRight: 30,
    fontSize: 14,
    alignSelf: 'stretch',
  };

  const style = {
    inputIOS: {
      ...basicStyle,
    },
    inputAndroid: {
      ...basicStyle,
    },
  };

  return (
    <Modal
      title={t('reportModal.title')}
      icon="warning"
      show={show}
      setShow={setShow}>
      <Text>{t('reportModal.content')}</Text>
      <Container>
        {/*@ts-ignore*/}
        <RNPickerSelect
          style={style}
          placeholder={{
            label: t('reportModal.reason.choose'),
            value: undefined,
          }}
          useNativeAndroidPickerStyle={false}
          onValueChange={value => setReason(value)}
          items={options}
        />
        {reason === 'other' && (
          <TextArea
            onChangeText={setComment}
            value={comment}
            placeholder={t('comment.commentPlaceholder')}
            multiline={true}
            numberOfLines={10}
          />
        )}
      </Container>
      {error && <Error content={error} />}
      <Row>
        <Button
          disabled={!reason}
          isLoading={isLoading}
          onPress={() => {
            reportComment();
          }}
          text={t('reportModal.send')}
        />
        <Button
          color={colors.grey}
          onPress={() => {
            setShow(false);
          }}
          text={t('reportModal.cancel')}
        />
      </Row>
    </Modal>
  );
};

export default ReportModal;
