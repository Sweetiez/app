import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

interface Props {
  length: number;
  onPress: () => void;
}

const Container = styled.TouchableOpacity`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  elevation: 50;
  background-color: white;
  margin: 5px;
  padding: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const Space = styled.View`
  width: 10px;
`;
const YellowText = styled.Text`
  color: ${colors.yellow};
`;

const Filters: React.FC<Props> = ({length, onPress}) => {
  const {t} = useTranslation();

  return (
    <Container onPress={onPress}>
      <Row>
        <YellowText>
          {t('filters.title')} ({length})
        </YellowText>
        <Space />
        {getIcons('filter', colors.yellow, 20)}
      </Row>
    </Container>
  );
};

export default Filters;
