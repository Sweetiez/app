import * as React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {Text as SpecialText, Button} from '../atoms';
import {EventModel} from '../../model';
import {formatDate, formatHourDate} from '../../utils/date';
import colors from '../../assets/colors';
import {useState} from 'react';
import {registerToEvents} from '../../store/api/event';
import {SUBSCRIBE_ERROR} from '../../store/constants';

interface Props {
  event: EventModel;
  token?: string;
  userId?: string;
}

const Error = styled.Text`
  color: ${colors.red};
  font-size: 12px;
  margin-right: auto;
  margin-left: auto;
`;
const Success = styled.Text`
  color: ${colors.green};
  margin-right: auto;
  margin-left: auto;
  font-size: 12px;
`;
const Content = styled.View`
  flex: 1;
`;
const Container = styled.View`
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
  align-items: center;
  padding: 5px;
`;
const Space = styled.View`
  height: 10px;
`;
const SmallSpace = styled.View`
  height: 5px;
`;
const Messages = styled.View`
  margin-bottom: 5px;
`;

const SubscribeButton = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Event: React.FC<Props> = ({event, token, userId}) => {
  const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const subscribe = () => {
    setSuccess(false);
    setIsLoading(true);
    const request = {eventId: event.id, subscriber: userId};
    registerToEvents(request, token).then(data => {
      setIsLoading(false);
      if (data === SUBSCRIBE_ERROR) {
        setError(true);
      } else {
        setError(false);
        setSuccess(true);
      }
    });
  };

  const address =
    event.localisation.address +
    ', ' +
    event.localisation.zipCode +
    ' ' +
    event.localisation.city;

  const taken = event.availability.placeTaken;
  const total = event.availability.totalPlaces;
  const availability = t('events.availability', {
    availablePlaces: total - taken,
    totalPlaces: total,
  });
  const startTime = formatHourDate(event.schedule.start);
  const endTime = formatHourDate(event.schedule.end);
  const date = formatDate(event.schedule.end);

  const schedule = t('events.schedule', {start: startTime, end: endTime, date});

  return (
    <Container>
      <Content>
        <SpecialText
          content={event.title}
          size={22}
          textAlign={'center'}
          color={colors.yellow}
        />
        <Space />
        <SpecialText content={event.description} size={18} />
        <Space />
        <SpecialText content={address} size={14} />
        <Space />
        {token && (
          <Messages>
            {success && <Success>{t('events.success')}</Success>}
            {error && <Error>{t('events.error')}</Error>}
          </Messages>
        )}
        <SpecialText content={availability} size={14} textAlign={'right'} />
        <SmallSpace />
        <SpecialText content={schedule} size={14} textAlign={'right'} />
        {token && (
          <SubscribeButton>
            <Button
              text={t('events.subscribe')}
              onPress={() => subscribe()}
              isLoading={isLoading}
            />
          </SubscribeButton>
        )}
      </Content>
    </Container>
  );
};

export default Event;
