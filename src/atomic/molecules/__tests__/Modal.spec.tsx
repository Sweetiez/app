import * as React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Modal from '../Modal';

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
  it('renders with cross', () => {
    const tree = renderer
      .create(
        <Modal {...basicProps} hasCross>
          <Text>Hello</Text>
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
