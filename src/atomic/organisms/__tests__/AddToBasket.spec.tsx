import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import AddToBasket from '../AddToBasket';

describe('AddToBasket', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AddToBasket
          addToBasket={jest.fn()}
          quantity={1}
          setQuantity={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
