import React, { useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../../../constants/Colors';
import IconName from '../../../../../../constants/IconName';
import ShadowStyleLow from '../../../../../../constants/ShadowStyleLow';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { CutTextLength } from '../../../../../../helpers/CutTextLength';

const TemplateMealRecipeList = ({ renderData, deleteRecipe, showRecipeModal }) => {
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
      style={[ShadowStyleLow, styles.container]}
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
        <Text style={styles.proteinValText}>{CutTextLength(item.name, 18)}</Text>
        <View style={styles.iconsWrapper}>
          <Icon.AntDesign
            name={IconName.right}
            size={20}
            color={Colors.light}
            style={styles.forwardIcon}
          />
          <View style={styles.separateIcons} />
          <TouchableOpacity
            style={[ShadowStyleHigh, styles.deleteIconWrapper]}
            onPress={() => deleteRecipe(item)}
          >
            <Icon.MaterialIcons
              name={IconName.delete}
              size={30}
              color={Colors.black}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </SharedLinearGradientBackgroundHorizontal>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={renderData}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default TemplateMealRecipeList;

TemplateMealRecipeList.propTypes = {
  renderData: PropTypes.array,
  deleteRecipe: PropTypes.func,
  showRecipeModal: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  deleteIcon: {
    padding: 5
  },
  deleteIconWrapper: {
    backgroundColor: Colors.light,
    borderRadius: 50
  },
  flatListStyle: {
    paddingTop: 10
  },
  forwardIcon: {
    alignSelf: 'center'
  },
  gradientWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  iconsWrapper: {
    flexDirection: 'row'
  },
  proteinValText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  separateIcons: {
    borderLeftColor: Colors.light,
    borderLeftWidth: 1,
    height: 40,
    marginHorizontal: 10
  }
});
