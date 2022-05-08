import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/svgMocks';
import Item from '../item';

describe('Item', () => {
  it('renders correctly', () => {
    const product = {
      name: 'Tartelette',
      description: 'This is a description',
      images: ['https://picsum.photos/1220/300'],
      rating: 5,
      price: 10,
    };
    const tree = renderer.create(<Item product={product} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
