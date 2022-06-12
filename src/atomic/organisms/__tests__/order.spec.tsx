import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Order from '../order';

describe('Order', () => {
  it('renders correctly', () => {
    const order = {
      id: '1',
      createdAt: '12/12/2022',
      pickupDate: '13/12/2022',
      products: [{name: 'Pizza', quantity: 2}],
      status: 'CREATED',
      totalPrice: 24,
    };
    const tree = renderer.create(<Order order={order} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
