import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SharedLinearGradientBackgroundVertical from '../../../shared/SharedLinearGradientBackgroundVertical';
import Colors from '../../../../constants/Colors';
import TemplateList from './TemplateList';
import SharedCreateEditTemplateModal from '../../../shared/modal/SharedCreateEditTemplateModal';
import { fetchTemplates } from '../../../../store/actions/TemplateActions';
import { templatesSelector } from '../../../../store/selectors/TemplateSelector';
import StandardNotificationModal from '../../../shared/modal/StandardNotificationModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { searchFilterListByName } from '../../../../helpers/SearchFilterListByName';
import SharedGroceryTemplateHeader from '../../../shared/modal/SharedGroceryTemplateHeader';

const Templates = () => {
  const dispatch = useDispatch();

  const [isCreateEditModelVisible, setIsCreateEditModelVisible] = useState(false);

  const templateList = useSelector(templatesSelector());
  const isStandardModalVisible = useSelector(showStandardPopUpSelector());

  const [filteredList, setFilteredList] = useState(templateList);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  useEffect(
    () => {
      setFilteredList(templateList);
    },
    [templateList]
  );

  const showCreateEditTemplateModal = () => setIsCreateEditModelVisible(prevState => !prevState);

  const handleSearchTemplateByLetter = letter =>
    setFilteredList(searchFilterListByName(templateList, letter));

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.linearGradientWrapper}
    >
      <StandardNotificationModal visible={isStandardModalVisible} />
      <SharedCreateEditTemplateModal
        isVisible={isCreateEditModelVisible}
        closeModal={showCreateEditTemplateModal}
        screen={'create'}
        template={{}}
      />
      <SharedGroceryTemplateHeader
        placeHolder={'Search template'}
        showModal={showCreateEditTemplateModal}
        handleSearch={handleSearchTemplateByLetter}
        filteredList={filteredList}
      />
      <TemplateList filteredList={filteredList} />
    </SharedLinearGradientBackgroundVertical>
  );
};

export default Templates;

const styles = StyleSheet.create({
  linearGradientWrapper: {
    height: '100%',
    paddingHorizontal: 5
  }
});
