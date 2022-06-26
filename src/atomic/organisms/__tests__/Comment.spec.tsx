import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Comment from '../Comment';
import {store} from '../../../store/configureStore';
import ReduxProvider from '../../../utils/provider';

describe('Comment', () => {
  it('renders correctly', () => {
    const comment = {
      id: '1',
      voter: {
        id: '123',
        name: 'John Doe',
      },
      content: 'This is a typical comment',
      mark: 4,
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
