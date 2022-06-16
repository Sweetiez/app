import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import {Back, Button, Error, Title} from '../../atomic/atoms';
import {cartSelector} from '../../store/selectors/cart';

import colors from '../../assets/colors';
import {Input} from '../../atomic/molecules';
import DatePicker from 'react-native-date-picker';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../utils/validator';
import {CREATE_AN_ORDER_ERROR} from '../../store/constants';
import ProductOrderRequestModel from '../../model/product-order-request-model';
import CreateOrderRequestModel from '../../model/create-order-request-model';
import {useSelector} from 'react-redux';
import {createAnOrdersRequest} from '../../store/api/orders';
import {formatDashDate} from '../../utils/date';

const CartRecapContainer = styled.View`
  flex: 1;
`;
const StyledTitle = styled(Title)`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const Arrow = styled.View`
  z-index: 10;
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
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const cart = useSelector(cartSelector);
  // const user = useSelector(userSelector);
  // todo enrichir input pour avoir une default value

  const validate = () => {
    if (email === '' || phone === '' || firstname === '' || lastname === '') {
      setError(t('form.blankInputsWithPassword'));
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
        products: cart.map(item => {
          return new ProductOrderRequestModel(
            item?.item?.id ? item.item.id : '',
            'SWEET',
            item?.quantity ? item.quantity : -1,
          );
        }),
      };
      createAnOrdersRequest(request).then(response => {
        setLoading(false);
        if (response !== CREATE_AN_ORDER_ERROR) {
          navigation.navigate('Payment', {email, orderId: response.orderId});
        } else {
          setError(t('form.apiError')); //TODO
        }
      });
    }
  };

  return (
    <StyledSafeAreaView>
      <Arrow>
        <Back navigation={navigation} color={colors.black} />
      </Arrow>
      <StyledTitle title={t('clientInfo.title')} />
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
              text="Select Date"
              onPress={() => setOpen(true)}
              color={colors.grey}
            />
            {date && <Text>{formatDashDate(date.toString())}</Text>}
            <DatePicker
              modal
              title={'Séléctionner une date'}
              cancelText={'annuler'}
              confirmText={'valider'}
              mode={'date'}
              open={open}
              date={date}
              locale={'fr'}
              onConfirm={d => {
                setOpen(false);
                setDate(d);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            {error && <Error content={error} />}
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
