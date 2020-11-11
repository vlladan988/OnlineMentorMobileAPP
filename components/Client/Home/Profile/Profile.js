import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import HeaderImage from './HeaderImage';
import ProfileDetails from './ProfileDetails';
import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import EditClientProfileModal from '../../../shared/modal/EditClientProfileModal';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../../store/selectors/UserSelector';

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector(userSelector());
  return (
    <View style={styles.container}>
      <HeaderImage />
      <ProfileDetails user={user} />
      <TouchableOpacity
        style={styles.editIcon}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <Icon.MaterialIcons
          name={IconName.edit}
          size={40}
          color={Colors.cloudColor}
        />
      </TouchableOpacity>
      <EditClientProfileModal
        isVisible={isModalVisible}
        closeModal={() => setIsModalVisible(!isModalVisible)}
        user={user}
      />
    </View>
  );
};

Profile.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },
  editIcon: {
    bottom: 20,
    position: 'absolute',
    right: 20
  }
});

export default Profile;
