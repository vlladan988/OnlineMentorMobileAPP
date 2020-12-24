import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import Colors from '../../../../../../constants/Colors';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const RecipeEmailDescField = ({
  name,
  setName,
  description,
  setDescription
}) => {
  return (
    <View style={[styles.inputPadding, ShadowStyleHigh]}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[
          Colors.darkBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.lightBackgroundAppColor
        ]}
        childrenStyle={styles.gradientWrapper}
      >
        <View style={styles.inputNameWrapper}>
          <Text style={styles.inputText}>{$t('trainer.recipeName')}</Text>
          <TextInput
            style={styles.input}
            placeholder={$t('trainer.recipeNameText')}
            placeholderTextColor={Colors.lightGrayL}
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.inputDescWrapper}>
          <Text style={styles.inputText}>{$t('trainer.recipeDesc')}*</Text>
          <TextInput
            style={styles.input}
            placeholder={'Prepare Checken with Rice and vegetables...'}
            multiline={true}
            placeholderTextColor={Colors.lightGrayL}
            onChangeText={text => setDescription(text)}
            value={description}
          />
        </View>
      </SharedLinearGradientBackgroundHorizontal>
    </View>
  );
};

export default RecipeEmailDescField;

RecipeEmailDescField.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func
};

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20
  },
  input: {
    color: Colors.light,
    flex: 1,
    minHeight: 40,
    paddingLeft: 10
  },
  inputDescWrapper: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 40
  },
  inputNameWrapper: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    marginVertical: 10
  },
  inputPadding: {
    paddingTop: 40
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
