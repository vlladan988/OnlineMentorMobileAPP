import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from './SharedLinearGradientBackgroundHorizontal';
import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';

const SharedClientTemplateMealList = ({ clientTemplates, showMealDetails, refresh }) => {
  return (
    <ScrollView style={styles.scrollViewWrapper}>
      <RefreshControl refreshing={false} onRefresh={refresh} />
      {clientTemplates ? (
        clientTemplates.template_meals.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => showMealDetails(item)}
            activeOpacity={0.7}
            style={styles.itemWrapper}
          >
            <SharedLinearGradientBackgroundHorizontal
              childrenColors={[
                Colors.darkBackgroundAppColor,
                Colors.backgroundAppColor,
                Colors.lightBackgroundAppColor
              ]}
              childrenStyle={styles.gradientWrapper}
            >
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.count}>{item.recipes.length} recipes</Text>
              </View>
              <Icon.AntDesign
                name={IconName.right}
                size={20}
                color={Colors.light}
                style={styles.icon}
              />
            </SharedLinearGradientBackgroundHorizontal>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.noTemplateWrapper}>
          <Text style={styles.noTemplateText}>No Template</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default SharedClientTemplateMealList;

SharedClientTemplateMealList.propTypes = {
  clientTemplates: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  showMealDetails: PropTypes.func,
  refresh: PropTypes.func
};

const styles = StyleSheet.create({
  count: {
    color: Colors.oker,
    fontFamily: 'montserrat-italic',
    fontSize: 16
  },
  gradientWrapper: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  icon: {
    alignSelf: 'center'
  },
  itemName: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20
  },
  itemWrapper: {
    marginHorizontal: 1,
    marginVertical: 3
  },
  noTemplateText: {
    fontFamily: 'montserrat-italic',
    fontSize: 20
  },
  noTemplateWrapper: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center'
  },
  scrollViewWrapper: {
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  }
});
