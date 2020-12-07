import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../constants/ShadowStyleHigh';

const RecipeCreateModal = () => {
  return (
    <View style={styles.inputGroceriesWrapper}>
      <Text style={styles.inputText}>{$t('trainer.groceries')}</Text>
      <View style={styles.buttonsWrapper}>
        <View style={[ShadowStyleHigh, styles.groceriesButtonWrapper]}>
          <LinearGradient
            colors={[Colors.darkOker, Colors.oker, Colors.lightOker]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientGroceriesButtonsWrapper}
          >
            <TouchableOpacity
              style={styles.groceryButton}
              // onPress={handleRecipeModalVisible}
            >
              <Text style={styles.submitButtonText}>{$t('common.import')}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={[ShadowStyleHigh, styles.groceriesButtonWrapper]}>
          <LinearGradient
            colors={[
              Colors.darkBackgroundAppColor,
              Colors.backgroundAppColor,
              Colors.lightBackgroundAppColor
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientGroceriesButtonsWrapper}
          >
            <TouchableOpacity style={styles.groceryButton}>
              <Text style={styles.submitButtonText}>{$t('common.add')}+</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default RecipeCreateModal;

export const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20
  },
  gradientGroceriesButtonsWrapper: {
    borderRadius: 15
  },
  groceriesButtonWrapper: {
    paddingHorizontal: 10,
    width: '30%'
  },
  groceryButton: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  inputGroceriesWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    paddingTop: 20
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
