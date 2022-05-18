import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import ReduxProvider from '../../../utils/provider';
import CartItem from '../cart-item';
import configureStore from '../../../store/configureStore';

describe('CartItem', () => {
  const store = configureStore();
  it('renders correctly', () => {
    const cartItem = {
      quantity: 5,
      item: {
        name: 'Tartelette',
        description: 'This is a description',
        images: ['https://picsum.photos/1220/300'],
        rating: 5,
        price: 10,
      },
    };
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <CartItem cartItem={cartItem} />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
