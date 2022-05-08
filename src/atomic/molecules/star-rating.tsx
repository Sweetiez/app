import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Star from './../../assets/icons/star.svg';

interface StarsProps {
  rating: number;
  size?: number;
}

const Row = styled.View`
  flex-direction: row;
`;
const Stars: React.FC<StarsProps> = ({rating, size = 30}) => {
  const color = '#FFD700';
  const voidColor = '#ffffff';
  return (
    <Row>
      <Star
        color={color}
        fill={rating >= 1 ? color : voidColor}
        height={size}
        width={size}
      />
      <Star
        color={color}
        fill={rating >= 2 ? color : voidColor}
        height={size}
        width={size}
      />
      <Star
        color={color}
        fill={rating >= 3 ? color : voidColor}
        height={size}
        width={size}
      />
      <Star
        color={color}
        fill={rating >= 4 ? color : voidColor}
        height={size}
        width={size}
      />
      <Star
        color={color}
        fill={rating >= 5 ? color : voidColor}
        height={size}
        width={size}
      />
    </Row>
  );
};

export default Stars;
