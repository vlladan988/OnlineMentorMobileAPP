/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import { sumRecipeGrocery } from '../../../../helpers/SumRecipeGrocery';
import Font from '../../../../constants/Font';

const AnimatedInfo = ({ recipeExample }) => {
  const animationValue = new Animated.Value(150);
  const [viewState, setViewState] = useState(true);

  useEffect(() => {
    toggleAnimation();
  }, []);

  const toggleAnimation = () => {
    if (viewState === true) {
      Animated.timing(animationValue, {
        toValue: 270,
        timing: 1500
      }).start(() => {
        setViewState(false);
      });
    } else {
      Animated.timing(animationValue, {
        toValue: 270,
        timing: 1500
      }).start(setViewState(true));
    }
  };

  const animatedStyle = {
    width: animationValue,
    height: 170
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <View style={styles.itemWrapper}>
          <Icon.Octicons name={IconName.dot} color={Colors.oker} size={20} />
          <Text style={styles.gramsText}>
            {recipeExample.length && sumRecipeGrocery(recipeExample[0].recipe_groceries).proteins}g{' '}
          </Text>
          <Text style={styles.text}>Protein</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Icon.Octicons name={IconName.dot} color={Colors.oker} size={20} />
          <Text style={styles.gramsText}>
            {recipeExample.length && sumRecipeGrocery(recipeExample[0].recipe_groceries).carbons}g{' '}
          </Text>
          <Text style={styles.text}>Carbon UH</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Icon.Octicons name={IconName.dot} color={Colors.oker} size={20} />
          <Text style={styles.gramsText}>
            {recipeExample.length && sumRecipeGrocery(recipeExample[0].recipe_groceries).fats}g{' '}
          </Text>
          <Text style={styles.text}>Fats</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Icon.Octicons name={IconName.dot} color={Colors.lightCloudColor} size={20} />
          <Text style={styles.calorieText}>
            {recipeExample.length && sumRecipeGrocery(recipeExample[0].recipe_groceries).calories}g{' '}
          </Text>
          <Text style={styles.text}>Calories</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AnimatedInfo;

AnimatedInfo.propTypes = {
  recipeExample: PropTypes.array
};

const styles = StyleSheet.create({
  calorieText: {
    color: Colors.lightCloudColor,
    fontFamily: 'montserrat-bold',
    fontSize: Font.normal,
    paddingHorizontal: 5,
    width: 60
  },
  container: {
    backgroundColor: Colors.light,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 3,
    position: 'absolute',
    right: 45,
    top: 0
  },
  gramsText: {
    color: Colors.oker,
    fontFamily: 'montserrat-bold',
    fontSize: Font.normal,
    paddingHorizontal: 5,
    width: 60
  },
  itemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10
  },
  text: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: Font.normal
  }
});
