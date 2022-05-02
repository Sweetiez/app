import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Star from './../../assets/icons/star.svg';

interface StarsProps {
  rating: number;
}

const Row = styled.View`
  flex-direction: row;
`;
const Stars: React.FC<StarsProps> = ({rating}) => {
  const color = '#FFD700';
  const voidColor = '#ffffff';
  console.log(rating);
  return (
    <Row>
      <Star color={color} fill={rating >= 1 ? color : voidColor} />
      <Star color={color} fill={rating >= 2 ? color : voidColor} />
      <Star color={color} fill={rating >= 3 ? color : voidColor} />
      <Star color={color} fill={rating >= 4 ? color : voidColor} />
      <Star color={color} fill={rating >= 5 ? color : voidColor} />
    </Row>
  );
};

export default Stars;
