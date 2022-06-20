import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import ArrowBack from '../../assets/icons/arrow-back.svg';
import colors from '../../assets/colors';

interface Props {
  navigation: any;
}
const Container = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 10;
  border-radius: 100px;
  background-color: ${colors.yellow};
  padding: 2px;
`;
const Back: React.FC<Props> = ({navigation}) => (
  <Container onPress={() => navigation.goBack()}>
    <ArrowBack color={colors.white} />
  </Container>
);

export default Back;
