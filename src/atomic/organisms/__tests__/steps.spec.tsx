import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Steps from '../steps';
import {fakeRecipes} from '../../../data/recipes';

describe('Steps', () => {
  it('renders correctly', () => {
    const steps = fakeRecipes[0].steps;
    const tree = renderer.create(<Steps steps={steps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
