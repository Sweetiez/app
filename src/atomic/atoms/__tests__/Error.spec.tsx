import * as React from 'react';
import renderer from 'react-test-renderer';
import Error from '../Error';

describe('Error', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Error content={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
