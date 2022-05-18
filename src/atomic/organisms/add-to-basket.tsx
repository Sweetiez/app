import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import {Button} from '../molecules';
import {useTranslation} from 'react-i18next';
import colors from '../../assets/colors';

interface Props {
  addToBasket: () => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const Container = styled.View`
  margin: auto;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

const AddToBasket: React.FC<Props> = ({addToBasket, quantity, setQuantity}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <TouchableOpacity
        disabled={quantity === 0}
        onPress={() => quantity > 0 && setQuantity(quantity - 1)}>
        {getIcons('minus', quantity === 0 ? colors.grey : colors.yellow)}
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
        {getIcons('plus', colors.yellow)}
      </TouchableOpacity>
      <Button
        text={t('details.add')}
        iconName={'add'}
        onPress={() => addToBasket()}
        disabled={quantity === 0}
        color={quantity === 0 ? colors.grey : colors.yellow}
      />
    </Container>
  );
};

export default AddToBasket;
