import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Back from '../back';

describe('Back', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Back navigation={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
