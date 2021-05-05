import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SharedClientProfileDetails from '../../../shared/SharedClientProfileDetails';
import { resetGoal } from '../../../../store/actions/GoalActions';
import { resetGallery } from '../../../../store/actions/GalleryActions';
import { currentClientSelector } from '../../../../store/selectors/ClientSelector';
import Colors from '../../../../constants/Colors';
import SharedClientProfileImage from '../../../shared/SharedClientProfileImage';
import { userSelector } from '../../../../store/selectors/UserSelector';

const SelectedClientProfile = () => {
  const dispatch = useDispatch();

  const client = useSelector(currentClientSelector());
  const user = useSelector(userSelector());

  useEffect(() => {
    dispatch(resetGoal());
    dispatch(resetGallery());
  }, []);

  return (
    <View style={styles.container}>
      <SharedClientProfileImage client={client} user={user} />
      <SharedClientProfileDetails client={client} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  }
});

export default SelectedClientProfile;
