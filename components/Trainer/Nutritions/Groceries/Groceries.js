import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/Colors';
import GroceryHeader from './GroceryHeader';
import GroceryList from './GroceryList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGroceries,
  deleteGroceries
} from '../../../../store/actions/GroceriesActions';
import { setShowDeletePopUp } from '../../../../store/actions/ErrorActions';
import { groceryListSelector } from '../../../../store/selectors/GrocerySelector';
import {
  showStandardPopUpSelector,
  showDeletePopUpSelector
} from '../../../../store/selectors/ErrorSelector';
import StandardNotificationModal from '../../../../components/shared/modal/StandardNotificationModal';
import { searchFilterListByName } from '../../../../helpers/SearchFilterListByName';
import SharedCreateEditGroceryModal from '../../../shared/modal/SharedCreateEditGroceryModal';
import SharedLinearGradientBackgroundVertical from '../../../shared/SharedLinearGradientBackgroundVertical';
import SharedDeleteModal from '../../../shared/SharedDeleteModal';

const Groceries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroceries());
  }, []);

  const groceries = useSelector(groceryListSelector());
  const isStandardModalVisible = useSelector(showStandardPopUpSelector());
  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());

  const [screen, setScreen] = useState('create');
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const handleShowCreateEditGroceryModal = screenType => {
    setScreen(screenType);
    setIsModalVisible(prevState => !prevState);
  };

  const handleDeleteGrocery = () =>
    dispatch(deleteGroceries(choosedGrocery.id));

  const showDeleteModal = () =>
    dispatch(setShowDeletePopUp('Delete Grocery ?'));

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.linearGradientContainer}
    >
      <StandardNotificationModal visible={isStandardModalVisible} />
      <SharedDeleteModal
        isVisible={isDeleteModalVisible}
        handleDelete={handleDeleteGrocery}
      />
      <SharedCreateEditGroceryModal
        isVisible={isModalVisible}
        closeModal={handleShowCreateEditGroceryModal}
        choosedGrocery={choosedGrocery}
        screen={screen}
      />
      <GroceryHeader
        showSharedCreateEditModal={handleShowCreateEditGroceryModal}
        handleSearchGrocery={handleSearchGrocery}
      />
      <GroceryList
        renderListGroceries={groceriesFiltered}
        showSharedCreateEditModal={handleShowCreateEditGroceryModal}
        handleChooseGrocery={grocery => setChoosedGrocery(grocery)}
        showDeleteModal={showDeleteModal}
      />
    </SharedLinearGradientBackgroundVertical>
  );
};

export default Groceries;

export const styles = StyleSheet.create({
  linearGradientContainer: {
    height: '100%'
  }
});
