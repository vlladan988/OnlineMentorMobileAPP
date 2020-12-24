import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import ShadowStyleHigh from '../../../../constants/ShadowStyleHigh';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import { useDispatch } from 'react-redux';
import { setMealTypeModal } from '../../../../store/actions/RecipeActions';

const RecipeHeader = ({
  searchText,
  setSearchText,
  handleCreateRecipeModalVisible
}) => {
  const dispatch = useDispatch();
  return (
    <>
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
          <SharedLinearGradientBackgroundHorizontal
            childrenColors={[
              Colors.darkCloudColor,
              Colors.cloudColor,
              Colors.lightCloudColor
            ]}
            childrenStyle={styles.gradientWrapper}
          >
            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleCreateRecipeModalVisible}
            >
              <Text style={styles.headerButtonText}>Create Recipe</Text>
            </TouchableOpacity>
          </SharedLinearGradientBackgroundHorizontal>
        </View>
        <View style={[styles.buttonWrapper, ShadowStyleHigh]}>
          <SharedLinearGradientBackgroundHorizontal
            childrenColors={[
              Colors.darkBackgroundAppColor,
              Colors.backgroundAppColor,
              Colors.lightBackgroundAppColor
            ]}
            childrenStyle={styles.gradientWrapper}
          >
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => dispatch(setMealTypeModal())}
            >
              <Text style={styles.headerButtonText}>Type</Text>
            </TouchableOpacity>
          </SharedLinearGradientBackgroundHorizontal>
        </View>
      </View>
    </>
  );
};

export default RecipeHeader;

RecipeHeader.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
  handleCreateRecipeModalVisible: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
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
