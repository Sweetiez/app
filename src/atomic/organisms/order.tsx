import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {Order} from '../../model';
import {useTranslation} from 'react-i18next';
import {formatDate} from '../../utils/date';
import colors from '../../assets/colors';

interface Props {
  order: Order;
}

const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
  padding: 10px;
`;
const Column = styled.View`
  flex-direction: column;
  margin-top: 10px;
`;
const MarginedRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const SpacedRow = styled(MarginedRow)`
  justify-content: space-between;
`;
const List = styled.View`
  margin-left: 20px;
`;
const YellowText = styled.Text`
  font-weight: bold;
  color: ${colors.yellow};
`;
const BoldText = styled.Text`
  font-weight: bold;
`;

const CartItem: React.FC<Props> = ({order}) => {
  const {t} = useTranslation();

  let statusName;

  switch (order.status) {
    case 'ORDERED':
      statusName = t('orders.status.ordered');
      break;
    case 'PAID':
      statusName = t('orders.status.paid');
      break;
    case 'DELIVERED':
      statusName = t('orders.status.delivered');
      break;
    case 'READY':
      statusName = t('orders.status.ready');
      break;
    case 'CREATED':
      statusName = t('orders.status.created');
      break;
    default:
      statusName = t('orders.status.unknown');
      break;
  }
  return (
    <Container>
      <Row>
        <BoldText>{t('orders.orderedOn')}</BoldText>
        <Text>{formatDate(order.createdAt)}</Text>
      </Row>
      <MarginedRow>
        <BoldText>{t('orders.orderSchedule')}</BoldText>
        <Text>{formatDate(order.pickupDate)}</Text>
      </MarginedRow>
      <Column>
        <BoldText>{t('orders.items')}</BoldText>
        <List>
          {order.products.map(product => (
            <Text>
              {product.name} X {product.quantity}
            </Text>
          ))}
        </List>
      </Column>

      <SpacedRow>
        <Row>
          <YellowText>{t('orders.totalPrice')}</YellowText>
          <Text>{order.totalPrice} €</Text>
        </Row>
        <BoldText>{statusName}</BoldText>
      </SpacedRow>
    </Container>
  );
};

export default CartItem;
