import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Input from '../input';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Input
          placeholder="Placeholder"
          value="This is a value"
          onChangeText={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with multiline', () => {
    const tree = renderer
      .create(
        <Input
          placeholder="Placeholder"
          value="This is a value"
          onChangeText={jest.fn()}
          multiline={true}
          numberOfLines={10}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with rightIcon', () => {
    const tree = renderer
      .create(
        <Input
          placeholder="Placeholder"
          value="This is a value"
          onChangeText={jest.fn()}
          rightIconName="eye"
          rightIconOnPress={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with keyboard type', () => {
    const tree = renderer
      .create(
        <Input
          placeholder="Placeholder"
          value="This is a value"
          onChangeText={jest.fn()}
          keyboardType="email-address"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
