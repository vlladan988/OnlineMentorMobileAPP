import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import EditClientProfileModal from '../../../shared/modal/EditClientProfileModal';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../../store/selectors/UserSelector';
import { getTrainer } from '../../../../store/actions/TrainerActions';
import SharedClientProfileImage from '../../../shared/SharedClientProfileImage';
import SharedClientProfileDetails from '../../../shared/SharedClientProfileDetails';
import { isClient } from '../../../../helpers/IsClient';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrainer());
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector(userSelector());

  return (
    <View style={styles.container}>
      <SharedClientProfileImage client={user} user={user} />
      <SharedClientProfileDetails client={user} />
      {isClient(user) && (
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => setIsModalVisible(!isModalVisible)}
        >
          <Icon.Entypo name={IconName.edit} size={26} color={Colors.light} />
        </TouchableOpacity>
      )}
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
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  },
  editIcon: {
    position: 'absolute',
    right: 20,
    top: 20
  }
});

export default Profile;
