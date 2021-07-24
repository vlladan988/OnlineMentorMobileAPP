import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';

const SharedAnimatedDropdown = ({ deleteItem, editItem }) => {
  const animationValue = new Animated.Value(50);
  const [viewState, setViewState] = useState(true);

  useEffect(() => {
    toggleAnimation();
  }, []);

  const toggleAnimation = () => {
    if (viewState === true) {
      Animated.timing(animationValue, {
        toValue: 90,
        timing: 1500
      }).start(() => {
        setViewState(false);
      });
    } else {
      Animated.timing(animationValue, {
        toValue: 90,
        timing: 1500
      }).start(setViewState(true));
    }
  };

  const animatedStyle = {
    width: animationValue,
    height: 72
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity onPress={editItem} activeOpacity={0.6}>
          <Text style={styles.item}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteItem} activeOpacity={0.6}>
          <Text style={styles.item}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SharedAnimatedDropdown;

SharedAnimatedDropdown.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 3,
    position: 'absolute',
    right: 35,
    top: 10
  },
  item: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 10
  }
});
