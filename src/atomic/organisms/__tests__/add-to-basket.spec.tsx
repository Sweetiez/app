import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/svgMocks';
import AddToBasket from '../add-to-basket';

describe('AddToBasket', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AddToBasket addToBasket={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
