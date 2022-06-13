import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Category from '../category';

describe('Category', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Category
          checked={false}
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
          checked={true}
          setChecked={jest.fn()}
          label={'this is a checkbox'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
