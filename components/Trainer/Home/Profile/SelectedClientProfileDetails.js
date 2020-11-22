import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import { currentClientSelector } from '../../../../store/selectors/ClientSelector';

const SelectedClientProfileDetails = () => {
  const client = useSelector(currentClientSelector());

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.descWrapper}>
        <Text style={styles.descriptionText}>{client.description}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.SimpleLineIcons
          name={IconName.client}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{client.full_name}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.Octicons
          name={IconName.home}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{client.city}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.MaterialIcons
          name={IconName.email}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{client.email}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.AntDesign
          name={IconName.phone}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{client.phone_number}</Text>
      </View>
    </ScrollView>
  );
};

export default SelectedClientProfileDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  },
  credText: {
    color: Colors.lightGray,
    fontSize: 16
  },
  credWrapper: {
    alignItems: 'center',
    elevation: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95
  },
  descWrapper: {
    height: 120,
    paddingVertical: 20
  },
  descriptionText: {
    textAlign: 'center'
  },
  detailWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  itemName: {
    color: Colors.lightGray
  },
  itemValue: {
    color: Colors.cloudColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '33%'
  }
});
