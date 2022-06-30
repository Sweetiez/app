import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {Loader, Text, Title} from '../../atomic/atoms';
import {ErrorModal, Event} from '../../atomic/organisms';

import getIcons from '../../utils/icons';
import {checkConnectivity} from '../../utils/connectivity';
import colors from '../../assets/colors';

import {EVENTS_ERROR} from '../../store/constants';
import {getPublishedEvents} from '../../store/api/event';
import {eventsSelector} from '../../store/selectors/event';
import {updateEvents} from '../../store/actions/event';
import {tokenSelector, userSelector} from '../../store/selectors/user';

const Icon = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

const CenteredText = styled.View`
  text-align: center;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;
const Events = styled.View``;

function EventsScreen() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const events = useSelector(eventsSelector);
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);

  const getEventData = useCallback(() => {
    setLoading(true);
    getPublishedEvents().then(data => {
      setLoading(false);
      if (data === EVENTS_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(updateEvents(data));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        // reload data if connectivity is retrieved
        getEventData();
      }
    });
  }, [getEventData, showErrorModal]);

  useEffect(() => {
    getEventData();
  }, [getEventData, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  console.log(events);
  return (
    <SafeAreaView>
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('events.title')} />
        <Icon>{getIcons('event', colors.yellow, 100)}</Icon>

        {events.length > 0 ? (
          <Events>
            {events.map(event => (
              <Event event={event} token={token} userId={user.id} />
            ))}
          </Events>
        ) : (
          <CenteredText>
            <Text
              content={t('events.noEvents')}
              size={44}
              textAlign={'center'}
            />
          </CenteredText>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventsScreen;
