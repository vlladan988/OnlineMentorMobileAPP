import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

import avatar from '../../assets/images/richFroning.jpg';
import Colors from '../../constants/Colors';

const HeaderSliderComp = ({ trainer }) => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        style={styles.profileImage}
        source={trainer.photo_url ? { uri: trainer.photo_url } : avatar}
      />
      <View style={styles.headerTextWrapper}>
        <Text style={styles.nameText}>{trainer.full_name}</Text>
        <Text style={styles.itemText}>{trainer.city}</Text>
      </View>
    </View>
  );
};

export default HeaderSliderComp;

HeaderSliderComp.propTypes = {
  trainer: PropTypes.any
};

const styles = StyleSheet.create({
  headerTextWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center'
  },
  headerWrapper: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 40
  },
  itemText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular',
    fontSize: 16
  },
  nameText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 22
  },
  profileImage: {
    borderRadius: 50,
    height: 80,
    marginRight: 20,
    width: 80
  }
});
