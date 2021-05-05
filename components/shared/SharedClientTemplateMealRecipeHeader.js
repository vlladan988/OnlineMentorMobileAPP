import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';

import clientTemplateSmall from '../../assets/images/clientTemplateSmall.jpg';
import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';

const SharedClientTemplateMealRecipeHeader = ({ closeModal, choosedMeal }) => {
  return (
    <ImageBackground source={clientTemplateSmall} style={styles.templateImage}>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.goBackIconWrapper} onPress={closeModal}>
          <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
        </TouchableOpacity>
        <Text style={styles.nameText}>{choosedMeal && choosedMeal.name}</Text>
        <View style={styles.detailWrapper}>
          <ScrollView style={styles.descWrapper}>
            <Text style={styles.descText}>{choosedMeal && choosedMeal.description}</Text>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SharedClientTemplateMealRecipeHeader;

SharedClientTemplateMealRecipeHeader.propTypes = {
  closeModal: PropTypes.func,
  showEditMealModal: PropTypes.func,
  choosedMeal: PropTypes.object
};

const styles = StyleSheet.create({
  bottomWrapper: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  descText: {
    color: Colors.light,
    fontFamily: 'montserrat-italic',
    fontSize: 16
  },
  descWrapper: {
    marginVertical: 10,
    paddingHorizontal: 5
  },
  detailWrapper: {
    bottom: 0,
    maxHeight: 180,
    padding: 10,
    position: 'absolute',
    width: '100%'
  },
  goBackIconWrapper: {
    left: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: Constants.statusBarHeight
  },
  nameText: {
    alignSelf: 'center',
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 30,
    position: 'absolute',
    top: Constants.statusBarHeight
  },
  templateImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%'
  }
});
