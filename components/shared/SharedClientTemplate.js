import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import { currentClientSelector } from '../../store/selectors/ClientSelector';
import clientTemplate from '../../assets/images/recipeBottom.jpg';
import { getTemplates, unassignTemplateToClient } from '../../store/actions/TemplateActions';
import { clientTemplatesSelector } from '../../store/selectors/TemplateSelector';
import SharedClientTemplateMealRecipesModal from './modal/SharedClientTemplateMealRecipesModal';
import { userSelector } from '../../store/selectors/UserSelector';
import SharedClientTemplateHeader from './SharedClientTemplateHeader';
import SharedClientTemplateMealList from './SharedClientTemplateMealList';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { isClient } from '../../helpers/IsClient';

const SharedClientTemplate = () => {
  const dispatch = useDispatch();

  const [isRecipeListModalVisible, setIsRecipeListModalVisible] = useState(false);
  const [choosedMeal, setChoosedMeal] = useState(null);

  const client = useSelector(currentClientSelector());
  const user = useSelector(userSelector());
  const clientTemplates = useSelector(clientTemplatesSelector());

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () =>
    dispatch(
      getTemplates({
        clientId: isClient(user) ? user.id : client.id
      })
    );

  const showMealDetails = item => {
    setChoosedMeal(item);
    showRecipeMealsTemplateModal();
  };

  const showRecipeMealsTemplateModal = () => setIsRecipeListModalVisible(prevState => !prevState);

  const handleShowDeleteModal = () => dispatch(unassignTemplateToClient({ clientId: client.id }));

  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <ImageBackground source={clientTemplate} style={styles.contentWrapper}>
      <View style={styles.background}>
        <View style={styles.line} />
        <ScrollView>
          <Text style={styles.descText}>
            {clientTemplates.length && clientTemplates[0].template_description}
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );

  const onRefresh = () => handleLoad();

  return (
    <>
      <SharedClientTemplateMealRecipesModal
        isVisible={isRecipeListModalVisible}
        choosedMeal={choosedMeal}
        closeModal={showRecipeMealsTemplateModal}
      />
      <SharedClientTemplateHeader
        clientTemplates={clientTemplates.length && clientTemplates[0]}
        client={client}
        showDeleteModal={handleShowDeleteModal}
        showDescription={() => sheetRef.current.snapTo(0)}
        user={user}
      />
      <SharedClientTemplateMealList
        clientTemplates={clientTemplates.length && clientTemplates[0]}
        showMealDetails={showMealDetails}
        refresh={onRefresh}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200, 0, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
      />
    </>
  );
};

export default SharedClientTemplate;

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  contentWrapper: {
    height: 400,
    width: Layout.window.width
  },
  descText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 17,
    paddingHorizontal: 6,
    textAlign: 'center'
  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.light,
    borderRadius: 20,
    height: 10,
    marginVertical: 20,
    width: 80
  }
});
