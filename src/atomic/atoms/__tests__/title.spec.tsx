import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../title';

describe('Title', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Title content={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with specified size', () => {
    const tree = renderer.create(<Title content={'test'} size={34} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
