import React from 'react';
import renderer from 'react-test-renderer';
import '../../../utils/svgMocks';
import Stars from '../star-rating';

describe('Stars', () => {
  const ratings = [1, 2, 3, 4, 5];
  ratings.map(rating => {
    it('renders correctly for rating ' + rating, () => {
      const tree = renderer.create(<Stars rating={rating} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders with size', () => {
    const tree = renderer.create(<Stars rating={3} size={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
