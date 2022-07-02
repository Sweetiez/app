import * as React from 'react';
import renderer from 'react-test-renderer';
import Text from '../Text';

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text content={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with smaller size', () => {
    const tree = renderer.create(<Text content={'test'} size={10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with specified number of lines', () => {
    const tree = renderer
      .create(
        <Text
          content={
            'test renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines renders with specified number of lines test'
          }
          numberOfLines={3}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
