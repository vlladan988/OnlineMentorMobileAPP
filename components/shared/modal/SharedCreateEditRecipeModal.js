import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import RecipeImage from '../../Trainer/Nutritions/Recipe/RecipeModal/SharedCreateEditModal/RecipeImage';
import MealTypeRecipe from '../../Trainer/Nutritions/Recipe/RecipeModal/SharedCreateEditModal/MealTypeRecipe';
import SubmitButtonRecipeModal from '../../Trainer/Nutritions/Recipe/RecipeModal/SharedCreateEditModal/SubmitButtonRecipeModal';
import ImportAddGrocery from '../../Trainer/Nutritions/Recipe/RecipeModal/SharedCreateEditModal/ImportAddGrocery';
import ImportGroceryListModal from './ImportGroceryListModal';
import { importedGroceryListSelector } from '../../../store/selectors/GrocerySelector';
import { setImportedGroceries } from '../../../store/actions/GroceriesActions';
import { updateRecipe, addRecipe } from '../../../store/actions/RecipeActions';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import RecipeEmailDescField from '../../Trainer/Nutritions/Recipe/RecipeModal/SharedCreateEditModal/RecipeEmailDescField';
import { requiredFieldsValidation } from '../../../helpers/RequiredFieldsValidation';
import { setShowStandardPopUp } from '../../../store/actions/ErrorActions';
import StandardNotificationModal from './StandardNotificationModal';
import { showStandardPopUpSelector } from '../../../store/selectors/ErrorSelector';
import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';

const SharedCreateEditRecipeModal = ({
  recipe,
  isVisible,
  screen,
  closeCreateModal,
  closeEditModal
}) => {
  const dispatch = useDispatch();

  const [isImportGroceryModal, setIsImportGroceryModal] = useState(false);
  const [name, setName] = useState('');
  const [recipeImage, setRecipeImage] = useState(0);
  const [isCustomImage, setIsCustomImage] = useState(false);
  const [recipeType, setRecipeType] = useState(null);
  const [description, setDescription] = useState('');

  const importedGroceryListData = useSelector(importedGroceryListSelector());
  const isStandardModalVisible = useSelector(showStandardPopUpSelector());

  useEffect(
    () => {
      if (IsEditScreen(screen)) {
        setName(recipe.name ? recipe.name : '');
        setRecipeImage(recipe.recipe_image_url ? recipe.recipe_image_url : 0);
        setRecipeType(recipe.recipe_type);
        setDescription(recipe.recipe_description ? recipe.recipe_description : '');
        recipe.recipe_groceries &&
          recipe.recipe_groceries.forEach(recipeItem => {
            dispatch(setImportedGroceries(recipeItem));
          });
      }
    },
    [recipe]
  );

  const handleImportGroceryShowModal = () => setIsImportGroceryModal(prevState => !prevState);

  const handleImage = (isCustom, image) => {
    setIsCustomImage(isCustom);
    setRecipeImage(image);
  };

  const handleSubmitForm = () => {
    if (requiredFieldsValidation(new Array(name, description))) {
      dispatch(
        setShowStandardPopUp({
          message: 'Name and Description fields are Required !',
          warningIcon: true
        })
      );
    } else IsEditScreen(screen) ? handleUpdateRecipe() : handleAddRecipe();
  };

  const handleAddRecipe = () => {
    closeCreateModal();
    dispatch(
      addRecipe({
        name,
        isCustomImage,
        recipeImage,
        recipeType,
        description,
        recipeGroceries: importedGroceryListData
      })
    );
  };

  const handleUpdateRecipe = () => {
    closeEditModal();
    dispatch(
      updateRecipe({
        recipeId: recipe.id,
        name,
        isCustomImage,
        isImageChanged: recipeImage.toString() !== recipe.recipe_image_url.toString(),
        recipeImage,
        recipeType,
        description,
        recipeGroceries: importedGroceryListData
      })
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <StandardNotificationModal visible={isStandardModalVisible} />
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
        childrenStyle={{}}
      >
        <SafeAreaView style={styles.modalWrapper}>
          <ScrollView style={styles.scrollWrapper}>
            <ImportGroceryListModal
              isImportGroceryModal={isImportGroceryModal}
              closeModal={handleImportGroceryShowModal}
            />
            <RecipeImage
              handleIsCustomImage={handleImage}
              screen={screen}
              recipe={recipe}
              goBack={IsEditScreen(screen) ? closeEditModal : closeCreateModal}
            />
            <RecipeEmailDescField
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
            <MealTypeRecipe
              setRecipeType={type => setRecipeType(type)}
              screen={screen}
              recipe={recipe}
            />
            <ImportAddGrocery handleImportGroceryModalVisible={handleImportGroceryShowModal} />
            <SubmitButtonRecipeModal handleSubmitRecipe={handleSubmitForm} screen={screen} />
          </ScrollView>
        </SafeAreaView>
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default SharedCreateEditRecipeModal;

SharedCreateEditRecipeModal.propTypes = {
  isVisible: PropTypes.bool,
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  screen: PropTypes.string,
  closeCreateModal: PropTypes.func,
  closeEditModal: PropTypes.func
};

export const styles = StyleSheet.create({
  modalWrapper: {
    alignSelf: 'center',
    // paddingTop: Constants.statusBarHeight,
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    width: '100%'
  }
});
