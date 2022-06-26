import * as React from 'react';
import renderer from 'react-test-renderer';
import Error from '../error';

describe('Error', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Error content={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
