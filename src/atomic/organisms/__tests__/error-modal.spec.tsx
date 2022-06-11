import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import ErrorModal from '../error-modal';

describe('ErrorModal', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorModal show={true} setShow={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
