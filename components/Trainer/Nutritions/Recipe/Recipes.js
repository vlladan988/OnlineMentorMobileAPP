import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../../../constants/Colors';
import StandardNotificationModal from '../../../shared/modal/StandardNotificationModal';
import { getRecipeTypes } from '../../../../store/actions/RecipeActions';
import RecipeList from './RecipeList';
import SharedCreateEditRecipeModal from '../../../shared/modal/SharedCreateEditRecipeModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import RecipeHeader from './RecipeHeader';
import SharedLinearGradientBackgroundVertical from '../../../shared/SharedLinearGradientBackgroundVertical';
import { searchFilterListByName } from '../../../../helpers/SearchFilterListByName';
import {
  recipeListSelector,
  isMealTypeModalSelector
} from '../../../../store/selectors/RecipeSelector';
import SearchByMealTypeModal from '../../../shared/modal/SearchByMealTypeModal';
import { searchFilterListByMealType } from '../../../../helpers/SearchFilterListByMealType';
import CountRecipe from './CountRecipe';
import SharedRecipeModal from '../../../shared/modal/SharedRecipeModal';

const Recipes = () => {
  const dispatch = useDispatch();

  const isStandardModalVisible = useSelector(showStandardPopUpSelector());
  const recipeList = useSelector(recipeListSelector());
  const isMealTypeModalVisible = useSelector(isMealTypeModalSelector());

  const [isSharedModalVisible, setIsSharedModalVisible] = useState(false);
  const [filterBy, setFilterBy] = useState('');
  const [choosedRecipe, setChoosedRecipe] = useState([]);
  const [choosedScreen, setChoosedScreen] = useState('create');
  const [searchText, setSearchText] = useState('');
  const [isRecipeModalVisible, setIsRecipeModalVisible] = useState(false);

  const [filteredList, setFilteredList] = useState(recipeList);

  useEffect(() => {
    dispatch(getRecipeTypes());
  }, []);

  useEffect(
    () => {
      setFilteredList(recipeList);
      handleSetFilterBy('');
    },
    [recipeList]
  );

  const handleSetFilterBy = type => setFilterBy(type);

  const handleSearchRecipeByLetter = letter => {
    setSearchText(letter);
    setFilteredList(searchFilterListByName(recipeList, letter));
  };

  const handleSearchRecipeByMealType = type => {
    setFilteredList(searchFilterListByMealType(recipeList, type));
    handleSetFilterBy(type);
  };

  const handleClearMealTypeText = () => {
    setFilteredList(recipeList);
    handleSetFilterBy('');
  };

  const closeSharedCreateEditModal = () => setIsSharedModalVisible(prevState => !prevState);

  const handleCreateRecipeModalVisible = () => {
    setChoosedScreen('create');
    closeSharedCreateEditModal();
  };

  const handleEditRecipeModalVisible = item => {
    setChoosedScreen('edit');
    closeSharedCreateEditModal();
    setChoosedRecipe(item);
  };

  const handleRecipeModal = item => {
    setChoosedRecipe(item);
    setIsRecipeModalVisible(prevState => !prevState);
  };

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.linearGradientWrapper}
    >
      <StandardNotificationModal visible={isStandardModalVisible} />
      <SharedRecipeModal
        isVisible={isRecipeModalVisible}
        recipe={choosedRecipe}
        closeModal={handleRecipeModal}
      />
      <SearchByMealTypeModal
        isModalVisible={isMealTypeModalVisible}
        handleSearchRecipeByMealType={handleSearchRecipeByMealType}
      />
      <SharedCreateEditRecipeModal
        isVisible={isSharedModalVisible}
        closeCreateModal={handleCreateRecipeModalVisible}
        closeEditModal={() => handleEditRecipeModalVisible([])}
        recipe={choosedRecipe}
        screen={choosedScreen}
      />
      <RecipeHeader
        searchText={searchText}
        setSearchText={letter => handleSearchRecipeByLetter(letter)}
        handleCreateRecipeModalVisible={handleCreateRecipeModalVisible}
      />
      <CountRecipe
        filteredList={filteredList}
        filterBy={filterBy}
        clearMealTypeText={handleClearMealTypeText}
      />
      <RecipeList
        handleEditRecipeModalVisible={handleEditRecipeModalVisible}
        filteredList={filteredList}
        showRecipeModal={handleRecipeModal}
      />
    </SharedLinearGradientBackgroundVertical>
  );
};

export default Recipes;

export const styles = StyleSheet.create({
  linearGradientWrapper: {
    height: '100%',
    paddingHorizontal: 5
  }
});
