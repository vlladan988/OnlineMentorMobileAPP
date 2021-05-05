/* eslint-disable indent */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';

import clientTemplateSmall from '../../../../assets/images/clientTemplateSmall.jpg';
import NavigationService from '../../../../services/NavigationService';
import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import { useDispatch } from 'react-redux';
import { deleteTemplate } from '../../../../store/actions/TemplateActions';

const TemplateMealHeader = ({
  showCreateEditModal,
  showCreateMealModal,
  showAssignToClientModal,
  template
}) => {
  const dispatch = useDispatch();
  const optionValue = ['Assign to client', 'Add Meal', 'Edit', 'Delete'];

  const handleDropdownPicker = value => {
    switch (value) {
      case '0':
        // console.log('assign');
        showAssignToClientModal();
        break;
      case '1':
        showCreateMealModal();
        break;
      case '2':
        showCreateEditModal();
        break;
      case '3':
        dispatch(
          deleteTemplate({
            id: template.id
          })
        );
        NavigationService.goBack();
        break;
    }
  };

  return (
    <View style={styles.headerWrapper}>
      <ImageBackground
        source={
          template && template.template_image_url
            ? { uri: template.template_image_url }
            : clientTemplateSmall
        }
        style={styles.templateImage}
      >
        <View style={styles.bottomWrapper}>
          <TouchableOpacity
            onPress={() => NavigationService.goBack()}
            style={styles.goBackIconWrapper}
          >
            <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerDotsIconWrapper}>
            <ModalDropdown
              defaultIndex={0}
              options={optionValue}
              onSelect={text => handleDropdownPicker(text)}
              dropdownTextStyle={styles.dropdownTextStyle}
              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
              dropdownStyle={styles.dropdownStyle}
            >
              <Icon.MaterialCommunityIcons
                name={IconName.dotsIcon}
                color={Colors.light}
                size={30}
              />
            </ModalDropdown>
          </TouchableOpacity>
          <View style={styles.detailWrapper}>
            <Text style={styles.nameText}>{template && template.name}</Text>
            <ScrollView style={styles.descWrapper}>
              <Text style={styles.descText}>{template && template.template_description}</Text>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TemplateMealHeader;

TemplateMealHeader.propTypes = {
  showCreateEditModal: PropTypes.func,
  showCreateMealModal: PropTypes.func,
  showAssignToClientModal: PropTypes.func,
  template: PropTypes.object
};

const styles = StyleSheet.create({
  bottomWrapper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  descText: {
    color: Colors.light,
    fontSize: 16
  },
  descWrapper: {
    marginVertical: 10,
    paddingHorizontal: 5
  },
  detailWrapper: {
    bottom: 0,
    maxHeight: 150,
    padding: 10,
    position: 'absolute',
    width: '100%'
  },
  dropdownStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: 160
  },
  dropdownTextHighlightStyle: {
    backgroundColor: Colors.light,
    color: Colors.backgroundAppColor
  },
  dropdownTextStyle: {
    backgroundColor: Colors.light,
    color: Colors.backgroundAppColor,
    fontSize: 15,
    fontWeight: 'bold'
  },
  goBackIconWrapper: {
    left: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: Constants.statusBarHeight
  },
  headerDotsIconWrapper: {
    paddingHorizontal: 10,
    position: 'absolute',
    right: 10,
    top: Constants.statusBarHeight
  },
  headerWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 250,
    justifyContent: 'center'
  },
  nameText: {
    color: Colors.light,
    fontSize: 20
  },
  templateImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%'
  }
});
