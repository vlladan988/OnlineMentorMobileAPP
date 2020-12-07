import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../constants/Colors';
import HeaderCreateRecipeModal from '../../Trainer/Nutritions/Recipe/RecipeModal/HeaderCreateRecipeModal';
import RecipeImage from '../../Trainer/Nutritions/Recipe/RecipeModal/RecipeImage';
import MealTypeRecipeModal from '../../Trainer/Nutritions/Recipe/RecipeModal/MealTypeRecipeModal';
import SubmitButtonCreateRecipeModal from '../../Trainer/Nutritions/Recipe/RecipeModal/SubmitButtonCreateRecipeModal';
import RecipeCreateModal from '../../Trainer/Nutritions/Recipe/RecipeModal/RecipeCreateModal';

const CreateRecipeModal = ({ isRecipeVisible, closeModal }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isRecipeVisible}>
      <LinearGradient
        colors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
        style={styles.linearGradientWrapper}
      >
        <SafeAreaView style={styles.modalWrapper}>
          <HeaderCreateRecipeModal closeModal={closeModal} />
          <ScrollView style={styles.scrollWrapper}>
            <View style={styles.inputNameWrapper}>
              <Text style={styles.inputText}>{$t('trainer.recipeName')}</Text>
              <TextInput
                style={styles.input}
                placeholder={$t('trainer.recipeMealNameText')}
                placeholderTextColor={Colors.lightGray}
                // onChangeText={text => console.log(text)}
                value={1}
              />
            </View>
            <RecipeImage />
            <MealTypeRecipeModal />
            <View style={styles.inputDescWrapper}>
              <Text style={styles.inputText}>{$t('trainer.recipeType')}</Text>
              <TextInput
                style={styles.inputDesc}
                numberOfLines={5}
                multiline={true}
                placeholder={'Prepare Checken with Rice and vegetables...'}
                placeholderTextColor={Colors.lightGray}
                // onChangeText={text => console.log(text)}
                value={1}
              />
            </View>
            <RecipeCreateModal />
            <SubmitButtonCreateRecipeModal closeModal={closeModal} />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </Modal>
  );
};

export default CreateRecipeModal;

CreateRecipeModal.propTypes = {
  isRecipeVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

export const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    color: Colors.light,
    flex: 1,
    height: 40,
    paddingLeft: 10
  },
  inputDesc: {
    backgroundColor: 'transparent',
    color: Colors.light,
    flex: 1,
    fontSize: 20,
    marginVertical: 30,
    minHeight: 60,
    paddingLeft: 10
  },
  inputDescWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    paddingTop: 20
  },
  inputNameWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingTop: 40
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  linearGradientWrapper: {
    height: '100%',
    paddingHorizontal: 10
  },
  modalWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    marginVertical: 10,
    width: '100%'
  }
});
