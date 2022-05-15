import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Step from '../step';

describe('Step', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Step count={3} text="This is a text step" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
