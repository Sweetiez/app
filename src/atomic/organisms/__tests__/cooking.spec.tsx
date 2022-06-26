import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Cooking from '../cooking';

describe('Cooking', () => {
  it('renders correctly', () => {
    const props = {
      preparation: '15',
      cook: '25',
      chill: '5',
      totalTime: '50',
      rating: 4,
      cost: 30,
      level: 'Débutant',
      portions: 4,
    };
    const tree = renderer.create(<Cooking {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
