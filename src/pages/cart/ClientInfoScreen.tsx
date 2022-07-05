import * as React from 'react';
import {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
//@ts-ignore
import moment from 'moment';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';

import {Input} from '../../atomic/molecules';
import {Button, Error, Text} from '../../atomic/atoms';

import {CREATE_AN_ORDER_ERROR} from '../../store/constants';
import {cartSelector, rewardsSelector} from '../../store/selectors/cart';
import ProductOrderRequestModel from '../../model/ProductOrderRequestModel';
import CreateOrderRequestModel from '../../model/CreateOrderRequestModel';
import {createAnOrdersRequest} from '../../store/api/orders';
import {userSelector} from '../../store/selectors/user';

import {formatDashDate, formatDate} from '../../utils/date';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../utils/validator';
import colors from '../../assets/colors';

const CartRecapContainer = styled.View`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const Space = styled.View`
  height: 30px;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const Form = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

function ClientInfoScreen({navigation}) {
  const {t} = useTranslation();

  const user = useSelector(userSelector);
  const rewards = useSelector(rewardsSelector);

  const [firstname, setFirstname] = useState<string>(user?.firstName);
  const [lastname, setLastname] = useState<string>(user?.lastName);
  const [email, setEmail] = useState<string>(user?.email);
  const [phone, setPhone] = useState<string>(user?.phone);
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const dateInThreeDays = moment(new Date()).add(3, 'days').toDate();
  const [date, setDate] = useState<Date>(dateInThreeDays);
  const [dateStr, setDateStr] = useState<string>(
    t('clientInfo.pickupDateSelect'),
  );
  const cart = useSelector(cartSelector);

  const validate = () => {
    if (email === '' || phone === '' || firstname === '' || lastname === '') {
      setError(t('form.blankInputsWithPhone'));
      return false;
    } else if (!validateName(firstname)) {
      setError(t('form.incorrectFirstname'));
      return false;
    } else if (!validateName(lastname)) {
      setError(t('form.incorrectLastname'));
      return false;
    } else if (!validateEmail(email)) {
      setError(t('form.incorrectEmail'));
      return false;
    } else if (!validatePhone(phone)) {
      setError(t('form.incorrectPhone'));
      return false;
    }
    setError(null);
    return true;
  };

  const handleContinue = () => {
    if (validate()) {
      setLoading(true);
      const request: CreateOrderRequestModel = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phone,
        pickupDate: formatDashDate(date.toString()),
        rewardId: rewards && rewards.length > 0 ? rewards[0].id : '',
        products: cart.map(item => {
          return new ProductOrderRequestModel(
            item?.item?.id ? item.item.id : '',
            item?.item?.type,
            item?.quantity ? item.quantity : -1,
          );
        }),
      };
      createAnOrdersRequest(request).then(response => {
        setLoading(false);
        if (response !== CREATE_AN_ORDER_ERROR) {
          navigation.navigate('Payment', {
            email,
            orderId: response.orderId,
          });
        } else {
          setError(t('form.apiError')); //TODO
        }
      });
    }
  };

  return (
    <StyledSafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CartRecapContainer>
          <Form>
            <Input
              onChangeText={setFirstname}
              value={firstname}
              placeholder={t('form.firstnamePlaceholder')}
            />
            <Input
              onChangeText={setLastname}
              value={lastname}
              placeholder={t('form.lastnamePlaceholder')}
            />
            <Input
              onChangeText={setEmail}
              value={email}
              placeholder={t('form.emailPlaceholder')}
              keyboardType={'email-address'}
            />
            <Input
              onChangeText={setPhone}
              value={phone}
              placeholder={t('form.phonePlaceholder')}
              keyboardType={'phone-pad'}
            />
            <Button
              text={dateStr}
              onPress={() => setOpen(true)}
              color={colors.grey}
            />
            <DatePicker
              modal
              title={t('clientInfo.pickupDateSelect')}
              cancelText={t('common.cancel')}
              confirmText={t('common.validate')}
              mode={'date'}
              minimumDate={dateInThreeDays}
              open={open}
              date={date}
              locale={'fr'}
              onConfirm={d => {
                if (d) {
                  setDateStr(
                    t('clientInfo.pickupDate') + formatDate(d.toString()),
                  );
                }
                setOpen(false);
                setDate(d);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            {error && <Error content={error} />}
            <Space />
            <Text content={t('clientInfo.info')} size={20} />
            <Text
              content={t('clientInfo.address')}
              size={20}
              textDecoration={'underline'}
            />
          </Form>
        </CartRecapContainer>
      </ScrollView>
      <CheckoutButtonView>
        <CheckoutButton
          text={t('common.continue')}
          onPress={handleContinue}
          isLoading={isLoading}
        />
      </CheckoutButtonView>
    </StyledSafeAreaView>
  );
}

export default ClientInfoScreen;
