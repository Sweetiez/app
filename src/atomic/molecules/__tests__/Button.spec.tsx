import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Button from '../Button';

describe('Button', () => {
  const basicProps = {
    text: 'test',
    onPress: jest.fn(),
  };
  it('renders correctly', () => {
    const tree = renderer.create(<Button {...basicProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const tree = renderer.create(<Button {...basicProps} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with different color', () => {
    const tree = renderer
      .create(<Button {...basicProps} color={'#FFF000'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with icon', () => {
    const tree = renderer
      .create(<Button {...basicProps} iconName="pen" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
