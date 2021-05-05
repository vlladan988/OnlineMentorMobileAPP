import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import $t from 'i18n';

import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';
import { logout } from '../../store/actions/UserActions';

const OptionTrainerSliderComp = ({ navigation }) => {
  const dispatch = useDispatch();

  const _signOutAsync = async () => dispatch(logout());

  return (
    <>
      <View style={styles.trainerWrapper}>
        <Text style={styles.trainerText}>{$t('common.options')}</Text>
      </View>
      <ScrollView>
        <View style={styles.optionWrapper}>
          <View style={styles.optionDetailsWrapper}>
            <Text style={styles.itemText}>{$t('client.addClient')}</Text>
            <TouchableOpacity
              style={styles.addUserbutton}
              onPress={() => navigation.navigate('ClientCreate')}
            >
              <Icon.FontAwesome5
                name={IconName.userAdd}
                color={Colors.white}
                size={25}
                style={styles.optionIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionDetailsWrapper}>
          <Text style={styles.itemText}>{$t('trainer.editProfile')}</Text>
          <TouchableOpacity
            style={styles.editClientButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Icon.FontAwesome5
              name={IconName.userEdit}
              color={Colors.white}
              size={25}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.optionDetailsWrapper}>
          <Text style={styles.itemText}>{$t('auth.logOut')}</Text>
          <TouchableOpacity style={styles.logoutUser} onPress={_signOutAsync}>
            <Icon.FontAwesome5
              name={IconName.logout}
              color={Colors.white}
              size={28}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default OptionTrainerSliderComp;

OptionTrainerSliderComp.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  addUserbutton: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  editClientButton: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundAppColor,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  itemText: {
    fontFamily: 'montserrat-regular',
    fontSize: 16
  },
  logoutUser: {
    alignItems: 'center',
    backgroundColor: Colors.warningColor,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  optionDetailsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 70,
    marginRight: 40,
    marginTop: 10
  },
  optionWrapper: {
    paddingTop: 20
  },
  trainerText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    paddingBottom: 5
  },
  trainerWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 30,
    paddingTop: 40
  }
});
