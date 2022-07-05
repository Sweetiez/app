import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {Title, Loader} from '../../../atomic/atoms';
import {Event} from '../../../atomic/organisms';

import colors from '../../../assets/colors';
import getIcons from '../../../utils/icons';
import {checkConnectivity} from '../../../utils/connectivity';

import {
  myEventsSelector,
  tokenSelector,
  userSelector,
} from '../../../store/selectors/user';
import {GET_MY_EVENTS_ERROR} from '../../../store/constants';
import {getMyEventsRequest} from '../../../store/api/user';
import {setMyEvents} from '../../../store/actions/user';
import {EventModel} from '../../../model';
//@ts-ignore
import moment from 'moment';

const Content = styled.View`
  padding: 5px;
  margin-top: 30px;
`;
const Icon = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

function MyEventsScreen() {
  const {t} = useTranslation();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const myEvents = useSelector(myEventsSelector);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getData = useCallback(() => {
    setLoading(true);
    getMyEventsRequest(user.id, token).then(data => {
      setLoading(false);
      if (data === GET_MY_EVENTS_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(
          setMyEvents(
            data.filter(
              (ev: EventModel) =>
                ev.schedule && moment(ev.schedule.end).isAfter(moment()),
            ),
          ),
        );
      }
    });
  }, [dispatch, token, user.id]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        getData();
      }
    });
  }, [getData, showErrorModal]);

  useEffect(() => {
    getData();
  }, [getData, dispatch, token]);

  if (isLoading || !myEvents) {
    return <Loader />;
  }

  let content;

  if (!myEvents || myEvents.length === 0) {
    content = (
      <Container>
        <Title title={t('myEvents.empty')} size={40} />
      </Container>
    );
  } else {
    content = (
      <Content>
        {myEvents.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </Content>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Icon>{getIcons('event', colors.yellow, 80)}</Icon>
        {content}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyEventsScreen;
