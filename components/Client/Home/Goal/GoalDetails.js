import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import SetCurrentTimeModal from '../../../shared/modal/SetCurrentTimeModal';
import SetGoalTimeModal from '../../../shared/modal/SetGoalTimeModal';
import { userSelector } from '../../../../store/selectors/UserSelector';
import { getGoal, updateGoal } from '../../../../store/actions/GoalActions';
import { goalSelector } from '../../../../store/selectors/GoalSelector';

const GoalDetails = () => {
  const dispatch = useDispatch();

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [description, setDescription] = useState('');
  const [currentTime, setCurrentTime] = useState(moment().format('ll'));
  const [goalTime, setGoalTime] = useState(moment().format('ll'));
  const [modalCurrentTimeVisible, setModalCurrentTimeVisible] = useState(false);
  const [modalGoalTimeVisible, setModalGoalTimeVisible] = useState(false);

  const user = useSelector(userSelector());
  const goal = useSelector(goalSelector());

  const handleUpdateGoal = () => {
    dispatch(
      updateGoal({
        clientId: user.id,
        currentWeight,
        goalWeight,
        description,
        currentTime,
        goalTime
      })
    );
    handleHideSaveButton();
  };

  useEffect(() => {
    dispatch(getGoal(user.id));
  }, []);

  useEffect(
    () => {
      resetInputData();
    },
    [goal]
  );

  const resetInputData = () => {
    setGoalTime(moment(goal.end_at).format('ll'));
    setCurrentTime(moment(goal.start_at).format('ll'));
    setCurrentWeight(goal.current_weight);
    setGoalWeight(goal.final_weight);
    setDescription(goal.description);
  };

  const saveCurrentDate = selectedDate => {
    setCurrentTime(moment(selectedDate).format('ll'));
    setGoalTime(moment(selectedDate).format('ll'));
    setModalCurrentTimeVisible(!modalCurrentTimeVisible);
    handleShowSaveButton();
  };

  const saveGoalDate = selectedDate => {
    setGoalTime(moment(selectedDate).format('ll'));
    setModalGoalTimeVisible(!modalGoalTimeVisible);
    handleShowSaveButton();
  };

  const cancelChanges = () => {
    resetInputData();
    handleHideSaveButton();
  };

  const setTextField = (text, type) => {
    if (type === 'current') setCurrentWeight(text);
    else if (type === 'goal') setGoalWeight(text);
    else setDescription(text);
    handleShowSaveButton();
  };

  const handleShowSaveButton = () => setShowSaveButton(true);
  const handleHideSaveButton = () => setShowSaveButton(false);

  return (
    <View style={styles.container}>
      <SetCurrentTimeModal
        isModalCurrentTimeVisible={modalCurrentTimeVisible}
        saveCurrentDate={saveCurrentDate}
      />
      <SetGoalTimeModal
        isModalGoalTimeVisible={modalGoalTimeVisible}
        saveGoalDate={saveGoalDate}
        startDate={currentTime}
      />
      <View style={styles.detailWrapper}>
        <Text style={styles.itemValue}>{$t('client.setGoal')}</Text>
      </View>
      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldWrapper}>
          <View style={styles.inputFields}>
            <Text>{$t('client.current')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={text => setTextField(text, 'current')}
                value={currentWeight}
                style={styles.inputField}
                placeholder={goal.current_weight}
                keyboardType="numeric"
                color={Colors.cloudColor}
              />
              <Text> {$t('client.kg')}</Text>
            </View>
          </View>
          <View style={styles.inputFields}>
            <Text>{$t('client.goal')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={text => setTextField(text, 'goal')}
                value={goalWeight}
                style={styles.inputField}
                placeholder={goal.final_weight}
                keyboardType="numeric"
                color={Colors.cloudColor}
              />
              <Text> {$t('client.kg')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputFieldWrapper}>
          <TouchableOpacity
            style={styles.inputFields}
            onPress={() => setModalCurrentTimeVisible(!modalCurrentTimeVisible)}
          >
            <Text>{$t('client.start')}</Text>
            <Text>{currentTime}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputFields}
            onPress={() => setModalGoalTimeVisible(!modalGoalTimeVisible)}
          >
            <Text>{$t('client.end')}</Text>
            <Text>{goalTime}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputFieldDescWrapper}>
        <Text style={styles.descriptionText}>{$t('client.desc')}</Text>
        <TextInput
          onChangeText={text => setTextField(text, 'description')}
          numberOfLines={5}
          multiline={true}
          value={description}
          style={styles.inputField}
        />
      </View>
      {showSaveButton && (
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.saveButtonWrapper}
            onPress={cancelChanges}
          >
            <Text style={styles.buttonText}>{$t('common.cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButtonWrapper}
            onPress={handleUpdateGoal}
          >
            <Text style={styles.buttonText}>{$t('common.save')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GoalDetails;

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cancelButtonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    width: 100
  },
  container: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    elevation: 18,
    marginHorizontal: 15,
    marginTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95
  },
  descriptionText: {
    alignSelf: 'center',
    paddingBottom: 10
  },
  detailWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1
    // marginVertical: 10
  },
  inputField: {
    paddingLeft: 15,
    textAlign: 'center'
  },
  inputFieldContainer: {
    // elevation: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 9
    // },
    // shadowOpacity: 0.48,
    // shadowRadius: 11.95
  },
  inputFieldDescWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingTop: 30
  },
  inputFieldWrapper: {
    width: '45%'
  },
  inputFields: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  inputWrapper: {
    flexDirection: 'row'
  },
  itemValue: {
    alignSelf: 'center',
    color: Colors.cloudColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  saveButtonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.warningColor,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    width: 100
  }
});
