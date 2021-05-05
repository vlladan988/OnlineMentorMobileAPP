import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import SharedClientTemplateMealRecipeHeader from '../SharedClientTemplateMealRecipeHeader';
import Colors from '../../../constants/Colors';
import SharedClientTemplateMealRecipeList from '../SharedClientTemplateMealRecipeList';
import SharedRecipeModal from './SharedRecipeModal';

const SharedClientTemplateMealRecipesModal = ({ isVisible, choosedMeal, closeModal }) => {
  const [recipe, setRecipe] = useState([]);
  const [isRecipeModalVisible, setIsRecipeModalVisible] = useState(false);

  const handleShowRecipeModal = item => {
    setRecipe(item);
    showRecipeModal();
  };

  const showRecipeModal = () => setIsRecipeModalVisible(prevState => !prevState);

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <SharedRecipeModal
          isVisible={isRecipeModalVisible}
          recipe={recipe}
          closeModal={showRecipeModal}
        />
        <SharedClientTemplateMealRecipeHeader closeModal={closeModal} choosedMeal={choosedMeal} />
        <Text style={styles.countText}>
          Recipes: {choosedMeal && choosedMeal.recipes && choosedMeal.recipes.length}
        </Text>
        <SharedClientTemplateMealRecipeList
          choosedMeal={choosedMeal}
          showRecipeModal={handleShowRecipeModal}
        />
      </View>
    </Modal>
  );
};

export default SharedClientTemplateMealRecipesModal;

SharedClientTemplateMealRecipesModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  choosedMeal: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  },
  countText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    marginLeft: 20,
    paddingVertical: 7
  }
});
