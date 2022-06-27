import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Reward from '../Reward';
import {store} from '../../../store/configureStore';
import ReduxProvider from '../../../utils/provider';

describe('Reward', () => {
  const reward = {
    id: '1',
    name: 'Friandise',
    cost: 12,
    productId: '22',
    productType: 'SWEET',
    productName: 'Tartelette',
    productImage: undefined,
    state: 'PUBLISHED',
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Reward reward={reward} disabled={false} />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
