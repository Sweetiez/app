import React, {useState} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {Button} from '../atoms';
import {Modal, Category} from '../molecules';

import colors from '../../assets/colors';
import getIcons from '../../utils/icons';
import {FilterModel} from '../../model';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  filters: FilterModel;
  setFilters: (filters: FilterModel) => void;
}

const BigSpace = styled.View`
  margin-top: 30px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
const Filter = styled.View`
  flex-direction: column;
`;
const FilterFullWidth = styled.View`
  flex-direction: column;
  width: 100%;
`;
const Round = styled.View`
  background-color: white;
`;
const Scale = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const BoldText = styled.Text`
  font-weight: bold;
`;

const FiltersModal: React.FC<Props> = ({
  show,
  setShow,
  filters,
  setFilters,
}) => {
  const {t} = useTranslation();
  const [priceValues, setPriceValues] = useState<number[]>([0, 50]);
  const [salty, setSalty] = useState<boolean>(
    filters.category?.find(cat => cat === 'SALTY') || false,
  );
  const [sweety, setSweety] = useState<boolean>(
    filters.category?.find(cat => cat === 'SWEET') || false,
  );
  const [mix, setMix] = useState<boolean>(
    filters.category?.find(cat => cat === 'MIXED') || false,
  );

  const renderScale = (scale: string[]) => {
    const items = [];
    scale.map(i => {
      items.push(<Text>{i}</Text>);
    });
    return items;
  };

  const price =
    t('filters.filtersModal.price') +
    ' : ' +
    priceValues[0] +
    ' - ' +
    priceValues[1] +
    ' €';

  const handleSliderRatingChange = (nextValues: number | number[]) => {
    const newFilters = {...filters};
    newFilters.ratings = Array.isArray(nextValues)
      ? [...nextValues]
      : [nextValues, nextValues];
    setFilters(newFilters);
  };

  const handleSliderPriceChange = (nextValues: number | number[]) => {
    const newFilters = {...filters};
    newFilters.price = Array.isArray(nextValues)
      ? [...nextValues]
      : [nextValues, nextValues];
    setFilters(newFilters);
  };

  const handleCategoryChange = (category: string, value: boolean) => {
    if (category === 'SALTY') {
      setSalty(value);
    }
    if (category === 'SWEET') {
      setSweety(value);
    }
    if (category === 'MIXED') {
      setMix(value);
    }
    const newFilters = {...filters};
    const exists = filters.category?.includes(category);
    if (exists && !value && newFilters.category) {
      newFilters.category = newFilters.category.filter(
        filter => filter !== category,
      );
    } else if (value && newFilters.category) {
      newFilters.category = [...newFilters.category, category];
    } else {
      newFilters.category = [category];
    }
    setFilters(newFilters);
  };

  return (
    <Modal
      title={t('filters.filtersModal.title')}
      icon="filter"
      show={show}
      setShow={setShow}
      hasCross>
      <Filter>
        <BoldText>{t('filters.filtersModal.rating')}</BoldText>
        <Scale>{renderScale(['0', '1', '2', '3', '4', '5'])}</Scale>

        <MultiSlider
          onValuesChange={values => {
            handleSliderRatingChange(values);
          }}
          selectedStyle={{backgroundColor: colors.yellow}}
          min={0}
          max={5}
          values={filters.ratings || [0, 5]}
          allowOverlap={false}
          snapped={true}
          customMarker={() => (
            <Round>{getIcons('circle', colors.yellow, 30)}</Round>
          )}
        />
      </Filter>
      <Filter>
        <BoldText>{price}</BoldText>
        <MultiSlider
          onValuesChange={values => {
            setPriceValues(values);
            handleSliderPriceChange(values);
          }}
          selectedStyle={{backgroundColor: colors.yellow}}
          min={0}
          max={50}
          values={filters.price || [0, 50]}
          customMarker={() => (
            <Round>{getIcons('circle', colors.yellow, 30)}</Round>
          )}
        />
      </Filter>
      <FilterFullWidth>
        <BoldText>{t('filters.filtersModal.category')}</BoldText>
        <Category
          isChecked={salty}
          checked={salty}
          setChecked={() => handleCategoryChange('SALTY', !salty)}
          label={t('filters.filtersModal.categories.salty')}
        />
        <Category
          isChecked={sweety}
          checked={sweety}
          setChecked={() => handleCategoryChange('SWEET', !sweety)}
          label={t('filters.filtersModal.categories.sweety')}
        />
        <Category
          isChecked={mix}
          checked={mix}
          setChecked={() => handleCategoryChange('MIXED', !mix)}
          label={t('filters.filtersModal.categories.mix')}
        />
      </FilterFullWidth>
      <BigSpace />
      <Row>
        <Button
          color={colors.blue}
          onPress={() => {
            setFilters({});
            setShow(false);
          }}
          text={t('filters.filtersModal.clear')}
        />
      </Row>
    </Modal>
  );
};

export default FiltersModal;
