import * as React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Link content={'test'} onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
