/* eslint-disable indent */
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Layout from '../../constants/Layout';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import clientTemplateSmall from '../../assets/images/clientTemplateSmall.jpg';
import clientTemplate from '../../assets/images/clientTemplate.jpg';
import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';
import { isDefaultImage } from '../../helpers/IsDefaultImage';
import { isClient } from '../../helpers/IsClient';

const SharedClientTemplateHeader = ({
  clientTemplates,
  showDeleteModal,
  showDescription,
  user
}) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground source={clientTemplate} style={styles.coverImageBig}>
        <View style={styles.background}>
          <Image
            source={
              clientTemplates && clientTemplates.template_image_url
                ? isDefaultImage(clientTemplates.template_image_url)
                  ? clientTemplateSmall
                  : { uri: clientTemplates.template_image_url }
                : clientTemplateSmall
            }
            style={styles.coverImageSmall}
          />
          <Text style={styles.nameText}>{clientTemplates ? clientTemplates.name : 'Template'}</Text>
        </View>
        {!isClient(user) && (
          <TouchableOpacity
            style={styles.deleteIconWrapper}
            activeOpacity={0.7}
            disabled={!clientTemplates}
            onPress={showDeleteModal}
          >
            <Icon.MaterialCommunityIcons
              name={IconName.deleteCircle}
              size={36}
              style={styles.deleteIcon}
              color={Colors.light}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.infoIconWrapper} onPress={showDescription}>
          <Icon.AntDesign
            name={IconName.info}
            size={30}
            color={Colors.light}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
        <View style={styles.templateDetails}>
          <View>
            <Text style={styles.durationText}>
              Days: {clientTemplates && clientTemplates.template_duration}
            </Text>
            <Text style={styles.typeText}>
              Type: {clientTemplates && clientTemplates.template_meal_type}
            </Text>
          </View>
          <View>
            <Text style={styles.mealCount}>
              Meals:
              {clientTemplates && clientTemplates.template_meals.length}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SharedClientTemplateHeader;

SharedClientTemplateHeader.propTypes = {
  clientTemplates: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  showDeleteModal: PropTypes.func,
  showDescription: PropTypes.func,
  user: PropTypes.object
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  coverImageBig: {
    height: 250,
    width: Layout.window.width
  },
  coverImageSmall: {
    borderRadius: 70,
    height: 130,
    width: 130
  },
  deleteIcon: {
    padding: 15
  },
  deleteIconWrapper: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  durationText: {
    color: Colors.oker,
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerContainer: {
    height: 250
  },
  infoIcon: {
    padding: 15
  },
  infoIconWrapper: {
    left: 0,
    position: 'absolute'
  },
  mealCount: {
    color: Colors.light,
    fontSize: 20,
    textAlign: 'center'
  },
  nameText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 24,
    marginTop: 5
  },
  templateDetails: {
    alignItems: 'center',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 10,
    position: 'absolute',
    right: 10
  },
  typeText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
