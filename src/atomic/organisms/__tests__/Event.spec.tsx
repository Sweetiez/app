import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import ReduxProvider from '../../../utils/provider';
import Event from '../Event';
import {store} from '../../../store/configureStore';
import {EventModel} from '../../../model';

describe('Event', () => {
  it('renders correctly', () => {
    const event: EventModel = {
      id: '1',
      title: 'title',
      description: 'descritpion',
      localisation: {
        id: 'id',
        address: 'address',
        zipCode: 'zipCode',
        city: 'city',
      },
      availability: {totalPlaces: 3, placeTaken: 1},
      schedule: {
        start: '12/12/2022',
        end: '12/12/2022',
      },
    };
    const tree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Event event={event} />
        </ReduxProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
