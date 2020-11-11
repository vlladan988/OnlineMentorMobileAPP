import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';

const ProfileDetails = ({ user }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailWrapper}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemValue}>{user.age}</Text>
          <Text style={styles.itemName}>{$t('client.age')}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemValue}>{user.weight}</Text>
          <Text style={styles.itemName}>{$t('client.weight-kg')}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemValue}>{user.height}</Text>
          <Text style={styles.itemName}>{$t('client.height-cm')}</Text>
        </View>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.descriptionText}>{user.description}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.Octicons
          name={IconName.home}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{user.city}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.MaterialIcons
          name={IconName.email}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{user.email}</Text>
      </View>
      <View style={styles.credWrapper}>
        <Icon.AntDesign
          name={IconName.phone}
          color={Colors.cloudColor}
          size={26}
          style={styles.icon}
        />
        <Text style={styles.credText}>{user.phone_number}</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileDetails;

ProfileDetails.propTypes = {
  user: PropTypes.object
};

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5
  },
  descWrapper: {
    height: 150,
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
