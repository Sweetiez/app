import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Comment from '../comment';
import {store} from '../../../store/configureStore';
import ReduxProvider from '../../../utils/provider';

describe('Comment', () => {
  it('renders correctly', () => {
    const comment = {
      id: '1',
      author: 'abcd123',
      authorName: 'John Doe',
      content: 'This is a typical comment',
      rating: 4,
      date: '12/12/2012',
    };
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Comment comment={comment} />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
