import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Category from '../Category';

describe('Category', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Category
          isChecked={false}
          setChecked={jest.fn()}
          label={'this is a checkbox'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders checked', () => {
    const tree = renderer
      .create(
        <Category
          isChecked={true}
          setChecked={jest.fn()}
          label={'this is a checkbox'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
