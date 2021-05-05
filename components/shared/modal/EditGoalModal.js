import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import $t from 'i18n';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import progress from '../../../assets/images/progress.jpg';
import PickDayModal from './PickDayModal';
import { updateGoal } from '../../../store/actions/GoalActions';
import { dateFormat } from '../../../helpers/DateFormat';
import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

const EditGoalModal = ({ isVisible, user, goal, closeModal }) => {
  const dispatch = useDispatch();

  const [goalWeight, setGoalWeight] = useState('');
  const [description, setDescription] = useState('');
  const [currentTime, setCurrentTime] = useState(moment().format('ll'));
  const [goalTime, setGoalTime] = useState(moment().format('ll'));
  const [modalCurrentTimeVisible, setModalCurrentTimeVisible] = useState(false);
  const [isStartDate, setIsStartDate] = useState(false);

  const handleUpdateGoal = () => {
    dispatch(
      updateGoal({
        clientId: user.id,
        goalWeight,
        description,
        currentTime,
        goalTime
      })
    );
    closeModal();
  };

  useEffect(
    () => {
      resetInputData();
    },
    [goal]
  );

  const resetInputData = () => {
    setGoalTime(moment(goal.end_at).format('ll'));
    setCurrentTime(moment(goal.start_at).format('ll'));
    setGoalWeight(goal.final_weight);
    setDescription(goal.description);
  };

  const setTextField = text => setDescription(text);

  const handleStartOrEnd = isStart => {
    setIsStartDate(isStart);
    pickStartDate();
  };

  const pickStartDate = () => setModalCurrentTimeVisible(prevState => !prevState);

  const handlePickedDay = date => {
    isStartDate ? setCurrentTime(dateFormat(date)) : setGoalTime(dateFormat(date));
    pickStartDate();
  };
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity onPress={closeModal} activeOpacity={1} style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <TouchableOpacity onPress={closeModal} activeOpacity={1} style={styles.scrollContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.modalWrapper}>
              <View style={[styles.areaWrapper, styles.goalImageWrapper]}>
                <Image source={progress} style={styles.goalImage} />
                <Text style={styles.goalName}>Set Goal</Text>
              </View>
              <PickDayModal
                isVisible={modalCurrentTimeVisible}
                handlePickedDay={handlePickedDay}
                closeModal={pickStartDate}
              />
              <View style={styles.goalWeightWrapper}>
                <Text style={styles.itemNameAndDesc}>Goal Weight (Kg)</Text>
                <View style={styles.itemInput}>
                  <TextInput
                    style={styles.weightValue}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    maxLength={3}
                    onChangeText={text => setGoalWeight(text)}
                    value={goalWeight}
                    placeholder={String(goal.current_weight)}
                    placeholderTextColor={Colors.lightGray}
                    textAlign={'center'}
                  />
                </View>
              </View>
              <View style={styles.dateWrapper}>
                <TouchableOpacity
                  onPress={() => handleStartOrEnd(true)}
                  style={styles.borderRadiusWrapper}
                  activeOpacity={0.4}
                >
                  <View style={styles.textAndIconWrapper}>
                    <Text style={styles.startEndText}>Start</Text>
                    <Icon.MaterialCommunityIcons
                      name={IconName.calendar}
                      color={Colors.backgroundAppColor}
                      size={20}
                    />
                  </View>
                  <Text style={styles.startEndValue}>{currentTime}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleStartOrEnd(false)}
                  style={styles.borderRadiusWrapper}
                  activeOpacity={0.4}
                >
                  <View style={styles.textAndIconWrapper}>
                    <Icon.MaterialCommunityIcons
                      name={IconName.calendar}
                      color={Colors.backgroundAppColor}
                      size={20}
                    />
                    <Text style={styles.startEndText}>End</Text>
                  </View>
                  <Text style={styles.startEndValue}>{goalTime}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.descriptionWrapper}>
                <View style={styles.borderRadiusWrapper}>
                  <Text style={styles.itemNameAndDesc}>Description</Text>
                  <TextInput
                    onChangeText={text => setTextField(text)}
                    numberOfLines={5}
                    multiline={true}
                    value={description}
                    style={styles.inputField}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.saveButtonWrapper} onPress={handleUpdateGoal}>
                <Text style={styles.buttonText}>{$t('common.save')}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

export default EditGoalModal;

EditGoalModal.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  goal: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
  areaWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    paddingHorizontal: 5
  },
  borderRadiusWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 30
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: Layout.window.height
  },
  dateWrapper: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  descriptionWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 7
  },
  goalImage: {
    borderRadius: 30,
    height: 60,
    marginHorizontal: 10,
    width: 60
  },
  goalImageWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  goalName: {
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  goalWeightWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 7
  },
  inputField: {
    fontFamily: 'montserrat-italic',
    minHeight: 70,
    textAlign: 'center'
  },
  itemInput: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    width: 120
  },
  itemNameAndDesc: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingVertical: 5,
    textAlign: 'center'
  },
  modalWrapper: {
    backgroundColor: Colors.lightGrayBackground,
    width: '100%'
  },
  saveButtonWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginBottom: 10
  },
  scrollContainer: {
    alignItems: 'center',
    height: Layout.window.height,
    justifyContent: 'center'
  },
  startEndText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingBottom: 20
  },
  startEndValue: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-italic',
    fontSize: 18
  },
  textAndIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weightValue: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-italic',
    fontSize: 22,
    paddingHorizontal: 20
  }
});
