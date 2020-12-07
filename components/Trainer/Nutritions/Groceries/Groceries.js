import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../../constants/Colors';
import HeaderGroceries from './HeaderGroceries';
import CreateGroceryModal from '../../../shared/modal/CreateGroceryModal';
import ListGroceries from './ListGroceries';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGroceries,
  deleteGroceries
} from '../../../../store/actions/GroceriesActions';
import { groceryListSelector } from '../../../../store/selectors/GrocerySelector';
import EditGroceryModal from '../../../shared/modal/EditGroceryModal';
import { showStandardPopUp } from '../../../../store/selectors/ErrorSelector';
import StandardNotificationModal from '../../../../components/shared/modal/StandardNotificationModal';
import { searchFilterListByName } from '../../../../helpers/SearchFilterListByName';

const Groceries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroceries());
  }, []);

  const groceries = useSelector(groceryListSelector());
  const isStandardModalVisible = useSelector(showStandardPopUp());

  const [
    isCreateGroceryModalVisible,
    setIsCreateGroceryModalVisible
  ] = useState(false);
  const [isEditGroceryModalVisible, setIsEditGroceryModalVisible] = useState(
    false
  );
  const [choosedGrocery, setChoosedGrocery] = useState(false);
  const [groceriesFiltered, setGroceriesFiltered] = useState(groceries);

  useEffect(
    () => {
      setGroceriesFiltered(groceries);
    },
    [groceries]
  );

  const handleSearchGrocery = letter => {
    const filteredList = searchFilterListByName(groceries, letter);
    setGroceriesFiltered(filteredList);
  };

  const handleShowCreateGroceryModal = () =>
    setIsCreateGroceryModalVisible(!isCreateGroceryModalVisible);

  const handleDeleteGrocery = () =>
    dispatch(deleteGroceries(choosedGrocery.id));

  const handleShowEditGroceryModal = () =>
    setIsEditGroceryModalVisible(!isEditGroceryModalVisible);

  return (
    <LinearGradient
      colors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      style={styles.linearGradientContainer}
    >
      <StandardNotificationModal visible={isStandardModalVisible} />

      <CreateGroceryModal
        isCreateGroceryModalVisible={isCreateGroceryModalVisible}
        closeModal={handleShowCreateGroceryModal}
      />
      <EditGroceryModal
        isEditGroceryModalVisible={isEditGroceryModalVisible}
        choosedGrocery={choosedGrocery}
        closeModal={handleShowEditGroceryModal}
      />
      <HeaderGroceries
        showModal={handleShowCreateGroceryModal}
        handleSearchGrocery={handleSearchGrocery}
      />
      <ListGroceries
        renderListGroceries={groceriesFiltered}
        showEditGroceryModal={handleShowEditGroceryModal}
        handleChooseGrocery={grocery => setChoosedGrocery(grocery)}
        deleteGrocery={handleDeleteGrocery}
      />
    </LinearGradient>
  );
};

export default Groceries;

export const styles = StyleSheet.create({
  linearGradientContainer: {
    height: '100%'
  }
});
