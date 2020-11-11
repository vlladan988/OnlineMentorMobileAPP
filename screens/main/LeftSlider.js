import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { logout } from '../../store/actions/UserActions';

const LeftSlider = ({ navigation }) => {
  const dispatch = useDispatch();
  const _signOutAsync = async () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button onPress={navigation.closeDrawer} title="Close me" />
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Text>{$t('profile.changePassword.changePassword')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text>{$t('profile.updateUser.updateProfile')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_signOutAsync}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

LeftSlider.propTypes = {
  navigation: PropTypes.object
};

export default LeftSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
