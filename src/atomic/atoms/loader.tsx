import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const StyledLoader = styled.ActivityIndicator`
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const Loader: React.FC = () => (
  <StyledLoader size="large" color={colors.yellow} />
);

export default Loader;
