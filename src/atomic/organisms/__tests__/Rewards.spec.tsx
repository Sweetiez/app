import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Rewards from '../Rewards';
import {store} from '../../../store/configureStore';
import ReduxProvider from '../../../utils/provider';

describe('Rewards', () => {
  it('renders correctly', () => {
    const rewards = [
      {
        id: '1',
        name: 'Friandise',
        cost: 12,
        productId: '22',
        productType: 'SWEET',
        productName: 'Tartelette',
        productImage: undefined,
        state: 'PUBLISHED',
      },
    ];
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Rewards
            rewards={rewards}
            loyaltyPoints={120}
            selectedReward={undefined}
          />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without rewards', () => {
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Rewards
            rewards={[]}
            loyaltyPoints={120}
            selectedReward={undefined}
          />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
