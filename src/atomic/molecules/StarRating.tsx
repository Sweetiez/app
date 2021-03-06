import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Star from './../../assets/icons/star.svg';
import colors from '../../assets/colors';

interface StarsProps {
  rating: number;
  itemId: string;
  setRating?: (rating: number) => void;
  size?: number;
}

const Row = styled.View`
  flex-direction: row;
`;
const Stars: React.FC<StarsProps> = ({
  setRating,
  rating,
  size = 30,
  itemId,
}) => {
  const color = '#FFD700';
  const voidColor = colors.white;
  const ratings = [1, 2, 3, 4, 5];
  return (
    <Row>
      {ratings.map(r => {
        return (
          <Star
            color={color}
            fill={rating >= r ? color : voidColor}
            onPress={() => (setRating ? setRating(r) : {})}
            height={size}
            width={size}
            key={r + '-' + itemId}
          />
        );
      })}
    </Row>
  );
};

export default Stars;
