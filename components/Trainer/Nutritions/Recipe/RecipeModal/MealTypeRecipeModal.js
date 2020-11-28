import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import $t from 'i18n';
import ReciepeTypeRadioButtons from '../ReciepeTypeRadioButtons';
import Colors from '../../../../../constants/Colors';

const MealTypeRecipeModal = () => {
  const [mealType, setMealType] = useState(null);
  const changeMealType = type => setMealType(type);
  return (
    <View style={styles.mealTypeWrapper}>
      <View style={styles.mealTypeResetWrapper}>
        <Text style={[styles.inputText, styles.mealTypeCancelPadding]}>
          {$t('trainer.mealType')}
        </Text>
        {mealType && (
          <View style={styles.resetTextWrapper}>
            <Text style={styles.resetText} onPress={() => setMealType(null)}>
              {$t('common.cancel')}
            </Text>
          </View>
        )}
      </View>
      <ReciepeTypeRadioButtons
        changeMealType={changeMealType}
        mealType={mealType}
      />
    </View>
  );
};

export default MealTypeRecipeModal;

export const styles = StyleSheet.create({
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  mealTypeCancelPadding: {
    paddingVertical: 5
  },
  mealTypeResetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mealTypeWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    borderTopColor: Colors.light,
    borderTopWidth: 1,
    paddingTop: 10
  },
  resetText: {
    color: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  resetTextWrapper: {
    backgroundColor: Colors.warningColor,
    borderRadius: 10
  }
});
