import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';
import Colors from '../../../constants/Colors';
import TemplateMealRecipeHeader from '../../Trainer/Nutritions/Template/Modal/TemplateMealRecipeList/TemplateMealRecipeHeader';
import ButtonAndCount from '../../Trainer/Nutritions/Template/Modal/TemplateMealRecipeList/ButtonAndCount';
import TemplateMealRecipeList from '../../Trainer/Nutritions/Template/Modal/TemplateMealRecipeList/TemplateMealRecipeList';
import AddRemoveTemplateMealRecipeModal from '../../../components/shared/modal/AddRemoveTemplateMealRecipeModal';
import {
  getTemplateMealRecipies,
  deleteTemplateMealRecipe,
  addTemplateMealRecipe
} from '../../../store/actions/TemplateMealActions';
import { templateMealRecipeListSelector } from '../../../store/selectors/TemplateMealSelector';
import SharedCreateEditTemplateMealModal from './SharedCreateEditTemplateMealModal';
import SharedRecipeModal from './SharedRecipeModal';

const TemplateMealRecipeModal = ({ isVisible, closeModal, choosedMeal, template }) => {
  const dispatch = useDispatch();

  const renderData = useSelector(templateMealRecipeListSelector());

  const [isImportRecipeModal, setIsImportRecipeModal] = useState(false);
  const [isEditMealModalVisible, setIsEditMealModalVisible] = useState(false);
  const [isRecipeModalVisible, setIsRecipeModalVisible] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(
    () => {
      choosedMeal &&
        dispatch(
          getTemplateMealRecipies({
            templateMealId: choosedMeal.id
          })
        );
    },
    [choosedMeal]
  );

  const handleShowImportRecipeModal = () => setIsImportRecipeModal(prevState => !prevState);

  const handleAddRecipe = recipe => {
    dispatch(
      addTemplateMealRecipe({
        recipeId: recipe.id,
        templateMealId: choosedMeal.id,
        template: template.id
      })
    );
  };

  const handleDeleteRecipe = recipe => {
    dispatch(
      deleteTemplateMealRecipe({
        recipeId: recipe.id,
        templateMealId: choosedMeal.id,
        template: template.id
      })
    );
  };

  const handleShowRecipeModal = item => {
    setRecipe(item);
    showRecipeModal();
  };

  const showEditMealTemplateModal = () => setIsEditMealModalVisible(prevState => !prevState);

  const showRecipeModal = () => setIsRecipeModalVisible(prevState => !prevState);

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
        childrenStyle={styles.gradientModalWrapper}
      >
        <SharedRecipeModal
          isVisible={isRecipeModalVisible}
          recipe={recipe}
          closeModal={showRecipeModal}
        />
        <AddRemoveTemplateMealRecipeModal
          isVisible={isImportRecipeModal}
          renderData={renderData}
          addRecipe={handleAddRecipe}
          deleteRecipe={handleDeleteRecipe}
          closeModal={handleShowImportRecipeModal}
        />
        <SharedCreateEditTemplateMealModal
          isVisible={isEditMealModalVisible}
          screen={'edit'}
          closeModal={showEditMealTemplateModal}
          template={template}
          choosedMeal={choosedMeal}
        />
        <TemplateMealRecipeHeader
          showEditMealModal={showEditMealTemplateModal}
          closeModal={closeModal}
          choosedMeal={choosedMeal}
        />
        <ButtonAndCount
          showImportRecipeModal={handleShowImportRecipeModal}
          countRecipe={renderData.length}
        />
        <TemplateMealRecipeList
          renderData={renderData}
          deleteRecipe={handleDeleteRecipe}
          showRecipeModal={handleShowRecipeModal}
        />
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default TemplateMealRecipeModal;

TemplateMealRecipeModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  choosedMeal: PropTypes.object,
  template: PropTypes.object
};

const styles = StyleSheet.create({
  gradientModalWrapper: {
    height: '100%'
  }
});
