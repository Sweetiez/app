import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Modal from '../modal';

describe('Modal', () => {
  const basicProps = {
    show: true,
    setShow: jest.fn(),
    title: 'Title',
    icon: 'warning',
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Modal {...basicProps}>
          <Text>Hello</Text>
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders no children', () => {
    const tree = renderer.create(<Modal {...basicProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
