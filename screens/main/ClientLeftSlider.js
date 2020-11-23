import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DetailSliderComp from './DetailSliderComp';
import OptionSliderComp from './OptionSliderComp';
import HeaderSliderComp from './HeaderSliderComp';
import { trainerSelector } from '../../store/selectors/TrainerSelector';

const ClientLeftSlider = ({ navigation }) => {
  const trainer = useSelector(trainerSelector());
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSliderComp trainer={trainer} />
      <DetailSliderComp trainer={trainer} />
      <OptionSliderComp navigation={navigation} />
    </SafeAreaView>
  );
};

ClientLeftSlider.propTypes = {
  navigation: PropTypes.object
};

export default ClientLeftSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
