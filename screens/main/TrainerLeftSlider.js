import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { userSelector } from '../../store/selectors/UserSelector';
import DetailSliderComp from './DetailSliderComp';
import HeaderSliderComp from './HeaderSliderComp';
import OptionTrainerSliderComp from './OptionTrainerSliderComp';

const TrainerLeftSlider = ({ navigation }) => {
  const user = useSelector(userSelector());
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderSliderComp trainer={user} />
        <DetailSliderComp trainer={user} />
        <OptionTrainerSliderComp navigation={navigation} />
      </ScrollView>
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
