import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Filters from '../Filters';

describe('Filters', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Filters length={2} onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
