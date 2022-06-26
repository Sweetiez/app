import * as React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/mocks';
import Stars from '../StarRating';

describe('Stars', () => {
  const ratings = [1, 2, 3, 4, 5];
  ratings.map(rating => {
    it('renders correctly for rating ' + rating, () => {
      const tree = renderer
        .create(<Stars rating={rating} itemId={'1'} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders with setRating', () => {
    const tree = renderer
      .create(<Stars rating={3} size={30} setRating={jest.fn()} itemId={'1'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with size', () => {
    const tree = renderer
      .create(<Stars rating={3} size={30} itemId={'1'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
