import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Icon from '@expo/vector-icons';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import CreateRecipeModal from '../../../shared/modal/CreateRecipeModal';
import ShadowStyleHigh from '../../../../constants/ShadowStyleHigh';

const Recipes = () => {
  const [isRecipeVisible, setIsRecipeVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleRecipeModalVisible = () => setIsRecipeVisible(!isRecipeVisible);
  return (
    <LinearGradient
      colors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      style={styles.linearGradientWrapper}
    >
      <CreateRecipeModal
        isRecipeVisible={isRecipeVisible}
        closeModal={handleRecipeModalVisible}
      />
      <View style={styles.searchWrapper}>
        <Icon.AntDesign
          name={IconName.search}
          size={26}
          style={styles.searchIcon}
          color={Colors.light}
        />
        <TextInput
          style={styles.inputSearchField}
          placeholder={'Search receipt'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={[styles.buttonWrapper, ShadowStyleHigh]}>
          <LinearGradient
            colors={[
              Colors.darkCloudColor,
              Colors.cloudColor,
              Colors.lightCloudColor
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientWrapper}
          >
            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleRecipeModalVisible}
            >
              <Text style={styles.headerButtonText}>Create Recipe</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={[styles.buttonWrapper, ShadowStyleHigh]}>
          <LinearGradient
            colors={[
              Colors.darkBackgroundAppColor,
              Colors.backgroundAppColor,
              Colors.lightBackgroundAppColor
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientWrapper}
          >
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Type</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Recipes;

export const styles = StyleSheet.create({
  buttonWrapper: {
    // backgroundColor: 'transparent',
    // elevation: 24,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    width: '48%'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  gradientWrapper: {
    borderRadius: 30
  },
  headerButton: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  headerButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputSearchField: {
    color: Colors.light,
    flex: 1,
    height: 40
  },
  linearGradientWrapper: {
    height: '100%',
    paddingHorizontal: 10
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20
  }
});
