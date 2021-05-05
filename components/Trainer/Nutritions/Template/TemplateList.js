import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import clientTemplateSmall from '../../../../assets/images/clientTemplateSmall.jpg';
import Colors from '../../../../constants/Colors';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import IconName from '../../../../constants/IconName';
import NavigationService from '../../../../services/NavigationService';
import { CutTextLength } from '../../../../helpers/CutTextLength';

const TemplateList = ({ filteredList }) => {
  return (
    <ScrollView>
      {filteredList.map((template, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={() =>
            NavigationService.navigate('TemplateMealScreenTrainer', {
              template: template
            })
          }
          style={[ShadowStyleLow, styles.container]}
        >
          <SharedLinearGradientBackgroundHorizontal
            childrenColors={[
              Colors.darkBackgroundAppColor,
              Colors.backgroundAppColor,
              Colors.lightBackgroundAppColor
            ]}
            childrenStyle={styles.gradientWrapper}
          >
            <View style={styles.itemWrapper}>
              <Image
                source={
                  template.template_image_url
                    ? { uri: template.template_image_url }
                    : clientTemplateSmall
                }
                style={styles.profileImage}
              />
              <View style={styles.detailsWrapper}>
                <Text style={styles.itemName}>{CutTextLength(template.name, 18)}</Text>
                <Text style={styles.itemDurationAndType}>{template.template_duration} days</Text>
                <Text style={styles.itemDurationAndType}>{template.template_meal_type}</Text>
              </View>
              <Icon.AntDesign
                name={IconName.right}
                size={16}
                color={Colors.light}
                style={styles.icon}
              />
            </View>
          </SharedLinearGradientBackgroundHorizontal>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TemplateList;

TemplateList.propTypes = {
  filteredList: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  },
  detailsWrapper: {
    borderLeftColor: Colors.light,
    borderLeftWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 15
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: -5
  },
  itemDurationAndType: {
    color: Colors.oker,
    fontFamily: 'montserrat-italic',
    fontSize: 16
  },
  itemName: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    marginBottom: 10
  },
  itemWrapper: {
    flexDirection: 'row'
  },
  profileImage: {
    borderRadius: 50,
    height: 70,
    marginRight: 20,
    width: 70
  }
});
