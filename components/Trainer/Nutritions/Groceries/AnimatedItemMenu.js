import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import * as Icon from '@expo/vector-icons';

import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';

const AnimatedItemMenu = ({ updateGrocery, deleteGrocery }) => {
  const animationValue = new Animated.Value(40);
  const [viewState, setViewState] = useState(true);

  useEffect(() => {
    toggleAnimation();
  }, []);

  const toggleAnimation = () => {
    if (viewState === true) {
      Animated.timing(animationValue, {
        toValue: 100,
        timing: 1500
      }).start(() => {
        setViewState(false);
      });
    } else {
      Animated.timing(animationValue, {
        toValue: 100,
        timing: 1500
      }).start(setViewState(true));
    }
  };

  const animatedStyle = {
    width: animationValue,
    height: 40
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle, styles.animatedBox]}>
        <Icon.MaterialIcons
          name={IconName.editPencil}
          size={40}
          color={Colors.cloudColor}
          onPress={updateGrocery}
        />
        <Icon.MaterialIcons
          name={IconName.delete}
          size={40}
          color={Colors.warningColor}
          onPress={deleteGrocery}
        />
      </Animated.View>
    </View>
  );
};

export default AnimatedItemMenu;

const styles = StyleSheet.create({
  animatedBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    backgroundColor: Colors.backgroundAppColor,
    position: 'absolute',
    right: 40,
    top: 0,
    zIndex: 9
  }
});
