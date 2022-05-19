import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Star from './../../assets/icons/star.svg';
import colors from '../../assets/colors';

interface StarsProps {
  rating: number;
  setRating?: (rating: number) => void;
  size?: number;
}

const Row = styled.View`
  flex-direction: row;
`;
const Stars: React.FC<StarsProps> = ({setRating, rating, size = 30}) => {
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
            onPress={() => setRating(r)}
            height={size}
            width={size}
          />
        );
      })}
    </Row>
  );
};

export default Stars;
