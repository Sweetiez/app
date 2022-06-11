import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import ReportModal from '../report-modal';
import configureStore from '../../../store/configureStore';
import ReduxProvider from '../../../utils/provider';

describe('ErrorModal', () => {
  const store = configureStore();
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <ReportModal show={true} setShow={jest.fn()} evaluationId={'1'} />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
