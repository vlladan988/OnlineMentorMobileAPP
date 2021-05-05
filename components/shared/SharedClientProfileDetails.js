import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';
import PropTypes from 'prop-types';
import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';

const SharedClientProfileDetails = ({ client }) => {
  return (
    <ScrollView>
      <View style={styles.areaWrapper}>
        <View style={styles.detailWrapper}>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{client.age}</Text>
            <Text style={styles.itemName}>{$t('client.age')}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{client.weight}</Text>
            <Text style={styles.itemName}>{$t('client.weight-kg')}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{client.height}</Text>
            <Text style={styles.itemName}>{$t('client.height-cm')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.areaWrapper}>
        <View style={styles.descWrapper}>
          <Text style={styles.descriptionText}>{client.description}</Text>
        </View>
      </View>
      <View style={[styles.areaWrapper, styles.bottom]}>
        <View style={styles.credWrapper}>
          <Icon.MaterialIcons
            name={IconName.email}
            color={Colors.backgroundAppColor}
            size={26}
            style={styles.icon}
          />
          <Text style={styles.credText}>{client.email}</Text>
        </View>
        <View style={styles.credWrapper}>
          <Icon.AntDesign
            name={IconName.phone}
            color={Colors.backgroundAppColor}
            size={26}
            style={styles.icon}
          />
          <Text style={styles.credText}>{client.phone_number}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SharedClientProfileDetails;

SharedClientProfileDetails.propTypes = {
  client: PropTypes.object
};

const styles = StyleSheet.create({
  areaWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 7,
    paddingHorizontal: 5
  },
  bottom: {
    paddingVertical: 15
  },
  credText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 18
  },
  credWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  descWrapper: {
    paddingVertical: 20
  },
  descriptionText: {
    fontFamily: 'montserrat-italic',
    textAlign: 'center'
  },
  detailWrapper: {
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  icon: {
    paddingRight: 10
  },
  itemName: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular'
  },
  itemValue: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '33%'
  }
});
