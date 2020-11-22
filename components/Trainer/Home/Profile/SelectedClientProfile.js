import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SelectedClientHeaderImage from './SelectedClientHeaderImage';
import SelectedClientProfileDetails from './SelectedClientProfileDetails';
import { resetGoal } from '../../../../store/actions/GoalActions';
import { resetGallery } from '../../../../store/actions/GalleryActions';

const SelectedClientProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetGoal());
    dispatch(resetGallery());
  }, []);

  return (
    <View style={styles.container}>
      <SelectedClientHeaderImage />
      <SelectedClientProfileDetails />
    </View>
  );
};

SelectedClientProfile.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  }
});

export default SelectedClientProfile;
