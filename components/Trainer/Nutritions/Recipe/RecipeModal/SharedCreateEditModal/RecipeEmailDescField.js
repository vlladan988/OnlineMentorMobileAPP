import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ErrorText from '../../../../../shared/Text/ErrorText';
import { inputFealdErrorMessage } from '../../../../../../store/selectors/ErrorSelector';
import { setInputFealdError } from '../../../../../../store/actions/ErrorActions';

const RecipeEmailDescField = ({ name, setName, description, setDescription }) => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(inputFealdErrorMessage());
  return (
    <View style={styles.container}>
      <View style={styles.inputNameWrapper}>
        <Text style={styles.inputText}>{$t('trainer.recipeName')}*</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onEndEditing={() => dispatch(setInputFealdError(''))}
          clearButtonMode={'always'}
          placeholder={$t('trainer.recipeNameText')}
          placeholderTextColor={Colors.lightGrayL}
          onChangeText={text => setName(text)}
          value={name}
          selectionColor={Colors.light}
        />
      </View>
      <View style={styles.inputDescWrapper}>
        <Text style={styles.inputText}>{$t('trainer.recipeDesc')}*</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onEndEditing={() => dispatch(setInputFealdError(''))}
          clearButtonMode={'always'}
          placeholder={'Prepare Checken with Rice and vegetables...'}
          multiline={true}
          placeholderTextColor={Colors.lightGrayL}
          onChangeText={text => setDescription(text)}
          value={description}
          selectionColor={Colors.light}
        />
      </View>
      <ErrorText error={!!errorMessage} message={errorMessage} />
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
  container: {
    paddingHorizontal: 5,
    paddingTop: 60
  },
  input: {
    color: Colors.light,
    flex: 1,
    fontFamily: 'montserrat-italic',
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
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
