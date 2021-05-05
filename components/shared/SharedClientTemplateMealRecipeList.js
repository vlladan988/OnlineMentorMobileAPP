import React, { useCallback } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from './SharedLinearGradientBackgroundHorizontal';
import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';
import { CutTextLength } from '../../helpers/CutTextLength';

const SharedClientTemplateMealRecipeList = ({ choosedMeal, showRecipeModal }) => {
  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 90,
      offset: 90 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => showRecipeModal(item)}
    >
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[
          Colors.darkBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.lightBackgroundAppColor
        ]}
        childrenStyle={styles.gradientWrapper}
      >
        <View>
          <Text style={styles.proteinValText}>{CutTextLength(item.name, 25)}</Text>
          <Text style={styles.typeText}>{item.recipe_type}</Text>
        </View>
        <Icon.AntDesign
          name={IconName.right}
          size={20}
          color={Colors.light}
          style={styles.forwardIcon}
        />
      </SharedLinearGradientBackgroundHorizontal>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={choosedMeal && choosedMeal.recipes && choosedMeal.recipes}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default SharedClientTemplateMealRecipeList;

SharedClientTemplateMealRecipeList.propTypes = {
  showRecipeModal: PropTypes.func,
  choosedMeal: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 1,
    marginVertical: 3
  },
  flatListStyle: {
    // paddingTop: 10
  },
  forwardIcon: {
    alignSelf: 'center'
  },
  gradientWrapper: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  proteinValText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  typeText: {
    color: Colors.oker,
    fontFamily: 'montserrat-italic',
    fontSize: 16
  }
});
