import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Recipe from '../recipe';

describe('Recipe', () => {
  it('renders correctly', () => {
    const recipe = {
      name: 'Tartelette',
      description: 'This is a description',
      images: ['https://picsum.photos/1220/300'],
      rating: 5,
    };
    const tree = renderer.create(<Recipe recipe={recipe} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
