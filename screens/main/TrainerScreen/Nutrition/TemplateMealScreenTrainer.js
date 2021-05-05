import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../../../../constants/Colors';
import TemplateMealHeader from '../../../../components/Trainer/Nutritions/Template/TemplateMealHeader';
import SharedLinearGradientBackgroundVertical from '../../../../components/shared/SharedLinearGradientBackgroundVertical';
import TemplateMealList from '../../../../components/Trainer/Nutritions/Template/TemplateMealList';
import { templatesSelector } from '../../../../store/selectors/TemplateSelector';
import SharedCreateEditTemplateModal from '../../../../components/shared/modal/SharedCreateEditTemplateModal';
import SharedCreateEditTemplateMealModal from '../../../../components/shared/modal/SharedCreateEditTemplateMealModal';
import {
  getTemplateMeals,
  resetTemplateMealRecipe,
  resetTemplateMeals
} from '../../../../store/actions/TemplateMealActions';
import TemplateMealRecipeModal from '../../../../components/shared/modal/TemplateMealRecipeModal';
import AssignToClientModal from '../../../../components/shared/modal/AssignToClientModal';
import { assignTemplateToClient } from '../../../../store/actions/TemplateActions';

const TemplateMealScreenTrainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const templateProps = navigation.state.params.template;

  const [isCreateEditModalVisible, setIsCreateEditModalVisible] = useState(false);
  const [isCreateMealModalVisible, setIsCreateMealModalVisible] = useState(false);
  const [isRecipeListModalVisible, setIsRecipeListModalVisible] = useState(false);
  const [isAssignToClientModalVisible, setIsAssignToClientModalVisible] = useState(false);
  const [choosedTemplate, setChoosedTemplate] = useState(templateProps);
  const [choosedMeal, setChoosedMeal] = useState(null);

  const templateList = useSelector(templatesSelector());

  useEffect(() => {
    dispatch(getTemplateMeals(templateProps.id));
    return () => {
      dispatch(resetTemplateMeals());
    };
  }, []);

  useEffect(
    () => {
      setChoosedTemplate(templateList.find(template => template.id === templateProps.id));
    },
    [templateList]
  );

  const showCreateEditTemplateModal = () => setIsCreateEditModalVisible(prevState => !prevState);

  const showCreateMealTemplateModal = () => setIsCreateMealModalVisible(prevState => !prevState);

  const showRecipeMealsTemplateModal = () => setIsRecipeListModalVisible(prevState => !prevState);

  const showAssignToClientModal = () => setIsAssignToClientModalVisible(prevState => !prevState);

  const showRecipeList = item => {
    choosedMeal && item.id !== choosedMeal.id && dispatch(resetTemplateMealRecipe());
    setChoosedMeal(item);
    showRecipeMealsTemplateModal();
  };

  const assignToClient = client => {
    showAssignToClientModal();
    dispatch(
      assignTemplateToClient({
        templateId: templateProps.id,
        clientId: client.id
      })
    );
  };

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.gradientWrapper}
    >
      {/* <KeyboardAwareScrollView enableOnAndroid> */}
      <AssignToClientModal
        closeModal={showAssignToClientModal}
        isVisible={isAssignToClientModalVisible}
        submit={assignToClient}
      />
      <TemplateMealRecipeModal
        isVisible={isRecipeListModalVisible}
        choosedMeal={choosedMeal}
        template={choosedTemplate}
        closeModal={showRecipeMealsTemplateModal}
      />
      <SharedCreateEditTemplateMealModal
        isVisible={isCreateMealModalVisible}
        screen={'create'}
        closeModal={showCreateMealTemplateModal}
        template={choosedTemplate}
        choosedMeal={{}}
      />
      <SharedCreateEditTemplateModal
        isVisible={isCreateEditModalVisible}
        closeModal={showCreateEditTemplateModal}
        screen={'edit'}
        template={choosedTemplate}
      />
      <TemplateMealHeader
        showCreateEditModal={showCreateEditTemplateModal}
        showCreateMealModal={showCreateMealTemplateModal}
        showAssignToClientModal={showAssignToClientModal}
        template={choosedTemplate}
      />
      <TemplateMealList template={choosedTemplate} showMealDetails={showRecipeList} />
      {/* </KeyboardAwareScrollView> */}
    </SharedLinearGradientBackgroundVertical>
  );
};

export default TemplateMealScreenTrainer;

TemplateMealScreenTrainer.navigationOptions = {
  header: null
};

TemplateMealScreenTrainer.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1
  }
});
