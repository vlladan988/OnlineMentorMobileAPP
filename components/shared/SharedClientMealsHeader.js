import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';
import NavigationService from '../../services/NavigationService';

const SharedClientMealsHeader = ({ client, date }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => NavigationService.goBack()}>
          <Icon.Ionicons
            name={IconName.goBack}
            size={30}
            color={Colors.light}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.dateWrapper}>
          <Icon.MaterialCommunityIcons
            name={IconName.calendar}
            color={Colors.lightOker}
            size={24}
          />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <Text style={styles.nameWrapper}>{client.full_name}</Text>
    </>
  );
};

export default SharedClientMealsHeader;

SharedClientMealsHeader.propTypes = {
  client: PropTypes.object,
  date: PropTypes.string
};

const styles = StyleSheet.create({
  backIcon: {
    paddingRight: 30
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  dateText: {
    color: Colors.lightOker,
    fontFamily: 'montserrat-italic',
    paddingLeft: 5
  },
  dateWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameWrapper: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    paddingTop: 30,
    textAlign: 'center'
  }
});
