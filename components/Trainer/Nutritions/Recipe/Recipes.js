import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Icon from '@expo/vector-icons';

import Colors from '../../../../constants/Colors';
import StandardNotificationModal from '../../../shared/modal/StandardNotificationModal';
import { getRecipeTypes } from '../../../../store/actions/RecipeActions';
import RecipeList from './RecipeList';
import SharedCreateEditRecipeModal from '../../../shared/modal/SharedCreateEditRecipeModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import RecipeHeader from './RecipeHeader';
import SharedLinearGradientBackgroundVertical from '../../../shared/SharedLinearGradientBackgroundVertical';
import { searchFilterListByName } from '../../../../helpers/SearchFilterListByName';
import { recipeListSelector, recipeTypeSelector } from '../../../../store/selectors/RecipeSelector';
import { searchFilterListByMealType } from '../../../../helpers/SearchFilterListByMealType';
import CountRecipe from './CountRecipe';
import SharedRecipeModal from '../../../shared/modal/SharedRecipeModal';
import IconName from '../../../../constants/IconName';

const Recipes = () => {
  const dispatch = useDispatch();

  const isStandardModalVisible = useSelector(showStandardPopUpSelector());
  const recipeList = useSelector(recipeListSelector());
  const mealTypeList = useSelector(recipeTypeSelector());

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

  const searchByType = mealType => {
    handleSearchRecipeByMealType(mealType);
    sheetRef.current.snapTo(1);
  };

  const renderContent = () => (
    <View style={styles.contentWrapper}>
      <View style={styles.line} />
      <ScrollView>
        {mealTypeList.map((mealType, index) => (
          <TouchableOpacity
            style={styles.itemWrapper}
            onPress={() => searchByType(mealType.value)}
            key={index}
          >
            <View style={styles.item}>
              <Icon.MaterialCommunityIcons
                name={IconName.nutritions}
                size={20}
                color={Colors.listColor}
                style={styles.recipeIcon}
              />
              <Text style={styles.itemNameText}>
                {' - '}
                {mealType.value}
              </Text>
            </View>
            <View style={styles.iconWrapper}>
              <View style={styles.importGroceryIcon} />
              <Icon.AntDesign name={IconName.success} size={30} color={Colors.cloudColor} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
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
          showRecipeTypeBottomSheet={() => sheetRef.current.snapTo(0)}
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 0, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
      />
    </>
  );
};

export default Recipes;

export const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: Colors.light,
    height: 400
  },
  importGroceryIcon: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 26,
    position: 'absolute',
    top: 7,
    width: 26
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemNameText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  itemWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 2,
    paddingHorizontal: 5
  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrayL,
    borderRadius: 20,
    height: 10,
    marginVertical: 20,
    width: 80
  },
  linearGradientWrapper: {
    height: '100%',
    paddingHorizontal: 5
  },
  recipeIcon: {
    paddingLeft: 5
  }
});
