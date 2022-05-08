import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/svgMocks';
import Comment from '../comment';

describe('Comment', () => {
  it('renders correctly', () => {
    const comment = {
      id: '1',
      author: 'John Doe',
      content: 'This is a typical comment',
      rating: 4,
      date: '12/12/2012',
    };
    const tree = renderer.create(<Comment comment={comment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
