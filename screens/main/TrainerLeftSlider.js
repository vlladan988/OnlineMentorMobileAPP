import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { userSelector } from '../../store/selectors/UserSelector';
import DetailSliderComp from './DetailSliderComp';
import OptionSliderComp from './OptionSliderComp';
import HeaderSliderComp from './HeaderSliderComp';

const TrainerLeftSlider = ({ navigation }) => {
  const user = useSelector(userSelector());

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSliderComp trainer={user} />
      <DetailSliderComp trainer={user} />
      <OptionSliderComp navigation={navigation} />
    </SafeAreaView>
  );
};

TrainerLeftSlider.propTypes = {
  navigation: PropTypes.object
};

export default TrainerLeftSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
