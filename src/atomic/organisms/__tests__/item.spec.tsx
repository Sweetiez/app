import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Item from '../Item';
import ProductCardModel from '../../../model/ProductCardModel';

describe('Item', () => {
  it('renders correctly', () => {
    const product: ProductCardModel = {
      name: 'Tartelette',
      description: 'This is a description',
      images: ['https://picsum.photos/1220/300'],
      rating: 5,
      price: 10,
      id: '1',
      shortDescription: '',
      packagedPrice: 12,
      unitPerPackage: 11,
      ingredients: [],
      diets: [],
      allergens: [],
      flavor: 'SWEET',
      valuation: {
        mark: 0,
        voters: 0,
        votes: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
        comments: [],
      },
      sweets: [],
      type: 'SWEET',
    };
    const tree = renderer
      .create(<Item isTray={true} navigation={jest.fn()} product={product} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
