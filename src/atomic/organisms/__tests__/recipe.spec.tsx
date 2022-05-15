import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Recipe from '../recipe';
import {fakeRecipes} from '../../../data/recipes';

describe('Recipe', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Recipe recipe={fakeRecipes[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
