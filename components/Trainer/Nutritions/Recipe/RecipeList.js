import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import $t from 'i18n';

import IconName from '../../../../constants/IconName';
import dinner from '../../../../assets/images/dinner.jpg';
import lunch from '../../../../assets/images/lunch.png';
import breakfast from '../../../../assets/images/meal.jpg';
import Colors from '../../../../constants/Colors';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import { sumRecipeGrocery } from '../../../../helpers/SumRecipeGrocery';
import { isDefaultRecipeImage } from '../../../../helpers/IsDefaultRecipeImage';
import { deleteRecipe } from '../../../../store/actions/RecipeActions';
import SharedDeleteModal from '../../../shared/SharedDeleteModal';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import { showDeletePopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { setShowDeletePopUp } from '../../../../store/actions/ErrorActions';
import { recipePercentValue } from '../../../../helpers/RecipePercentValue';

const RecipeList = ({ handleEditRecipeModalVisible, filteredList }) => {
  const dispatch = useDispatch();

  const [choosedItem, setChoosedItem] = useState(null);
  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());

  let image = [breakfast, lunch, dinner];

  const showDeleteModal = item => {
    dispatch(setShowDeletePopUp('Delete Recipe ?'));
    setChoosedItem(item);
  };

  const handleDeleteRecipe = () => dispatch(deleteRecipe(choosedItem.id));

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 278,
      offset: 278 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <SharedDeleteModal
        isVisible={isDeleteModalVisible}
        handleDelete={handleDeleteRecipe}
      />
      <TouchableOpacity
        style={ShadowStyleLow}
        activeOpacity={0.7}
        onPress={() => handleEditRecipeModalVisible(item)}
      >
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <View style={styles.headerNameWrapper}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <View style={styles.item}>
            <Icon.MaterialIcons
              onPress={() => handleEditRecipeModalVisible(item)}
              name={IconName.editPencil}
              size={36}
              color={Colors.light}
              style={styles.optionIcon}
            />
            <Image
              source={
                isDefaultRecipeImage(item.recipe_image_url)
                  ? image[item.recipe_image_url]
                  : { uri: item.recipe_image_url }
              }
              style={styles.mealImage}
            />
            <Icon.MaterialCommunityIcons
              onPress={() => showDeleteModal(item)}
              name={IconName.closeOct}
              color={Colors.light}
              size={36}
              style={styles.optionIcon}
            />
          </View>
          <View style={styles.itemValWrapper}>
            <View style={styles.itemVal}>
              <Text style={styles.proteinPercentText}>
                {recipePercentValue(
                  sumRecipeGrocery(item.recipe_groceries),
                  sumRecipeGrocery(item.recipe_groceries).proteins
                )}
                %
              </Text>
              <Text style={styles.val}>{$t('common.proteins')}</Text>
              <Text style={styles.proteinValText}>
                {sumRecipeGrocery(item.recipe_groceries).proteins}g
              </Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.carbonsPercentText}>
                {recipePercentValue(
                  sumRecipeGrocery(item.recipe_groceries),
                  sumRecipeGrocery(item.recipe_groceries).carbons
                )}
                %
              </Text>
              <Text style={styles.val}>{$t('common.carbonUh')}</Text>
              <Text style={styles.carbonsValText}>
                {sumRecipeGrocery(item.recipe_groceries).carbons}g
              </Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.fatPercentText}>
                {recipePercentValue(
                  sumRecipeGrocery(item.recipe_groceries),
                  sumRecipeGrocery(item.recipe_groceries).fats
                )}
                %
              </Text>
              <Text style={styles.val}>{$t('common.fats')}</Text>
              <Text style={styles.fatValText}>
                {sumRecipeGrocery(item.recipe_groceries).fats}g
              </Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>Total {$t('common.calories')}</Text>
              <Text style={styles.calorieValText}>
                {sumRecipeGrocery(item.recipe_groceries).calories}
              </Text>
            </View>
          </View>
        </SharedLinearGradientBackgroundHorizontal>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={filteredList}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default RecipeList;

RecipeList.propTypes = {
  handleEditRecipeModalVisible: PropTypes.func,
  filteredList: PropTypes.array
};

const styles = StyleSheet.create({
  calorieValText: {
    color: Colors.warningColor,
    fontSize: 22
  },
  carbonsPercentText: {
    color: Colors.mainYellow,
    fontSize: 18
  },
  carbonsValText: {
    color: Colors.mainYellow,
    fontSize: 22
  },
  container: {
    margin: 10
  },
  fatPercentText: {
    color: Colors.oker,
    fontSize: 18
  },
  fatValText: {
    color: Colors.oker,
    fontSize: 22
  },
  flatListStyle: {
    // paddingTop: 50
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 20
  },
  headerNameWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    paddingBottom: 20,
    width: '100%'
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  itemVal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  itemValWrapper: {
    flexDirection: 'row',
    paddingTop: 50
  },
  mealImage: {
    alignSelf: 'center',
    borderRadius: 50,
    height: 170,
    resizeMode: 'cover',
    width: 170
  },
  nameText: {
    color: Colors.light,
    fontSize: 20
  },
  optionIcon: {
    padding: 5
  },
  proteinPercentText: {
    color: Colors.cloudColor,
    fontSize: 18
  },
  proteinValText: {
    color: Colors.cloudColor,
    fontSize: 22
  },
  val: {
    color: Colors.light,
    fontSize: 16,
    paddingVertical: 2,
    textAlign: 'center'
  }
});
