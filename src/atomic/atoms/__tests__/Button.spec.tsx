import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import colors from '../../../assets/colors';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button onPress={jest.fn()} text="This is a Button" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with different color', () => {
    const tree = renderer
      .create(
        <Button
          onPress={jest.fn()}
          text="This is a Button"
          color={colors.black}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders loading', () => {
    const tree = renderer
      .create(<Button onPress={jest.fn()} text="This is a Button" isLoading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const tree = renderer
      .create(<Button onPress={jest.fn()} text="This is a Button" disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
