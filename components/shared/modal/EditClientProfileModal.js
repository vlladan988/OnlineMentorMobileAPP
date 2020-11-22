import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import $t from 'i18n';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { updateClient } from '../../../store/actions/ClientActions';
import { isCredEmpty } from '../../../helpers/IsCredEmpty';

const EditClientProfileModal = ({ isVisible, closeModal, user }) => {
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUpdateClient = () => {
    dispatch(
      updateClient({
        clientId: user.id,
        age: isCredEmpty(age) ? user.age : age,
        weight: isCredEmpty(weight) ? user.weight : weight,
        height: isCredEmpty(height) ? user.height : height,
        desc: isCredEmpty(desc) ? user.description : desc,
        city: isCredEmpty(city) ? user.city : city,
        phoneNumber: isCredEmpty(phoneNumber) ? user.phone_number : phoneNumber
      })
    );
    setAge('');
    setWeight('');
    setHeight('');
    setDesc('');
    setCity('');
    setPhoneNumber('');
    closeModal();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#3f5069', '#33445d', '#202e46']}
          style={styles.gradientWrapper}
        >
          <KeyboardAwareScrollView enableOnAndroid>
            <View style={styles.itemWrapper}>
              <Text style={styles.itemText}>{$t('client.age')}</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  keyboardType={'numeric'}
                  onChangeText={text => setAge(text)}
                  value={age}
                  placeholder={String(user.age)}
                  placeholderTextColor={Colors.lightGray}
                  textAlign={'center'}
                />
              </View>
            </View>
            <View style={styles.itemWrapper}>
              <Text style={styles.itemText}>{$t('client.weight')}</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  keyboardType={'numeric'}
                  onChangeText={text => setWeight(text)}
                  value={weight}
                  placeholder={String(user.weight)}
                  placeholderTextColor={Colors.lightGray}
                  textAlign={'center'}
                />
                <Text style={styles.unit}>{$t('client.kg')}</Text>
              </View>
            </View>
            <View style={styles.itemWrapper}>
              <Text style={styles.itemText}>{$t('client.height')}</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  keyboardType={'numeric'}
                  onChangeText={text => setHeight(text)}
                  value={height}
                  placeholder={String(user.height)}
                  placeholderTextColor={Colors.lightGray}
                  textAlign={'center'}
                />
                <Text style={styles.unit}>{$t('client.cm')}</Text>
              </View>
            </View>
            <View style={styles.descWrapper}>
              <View style={styles.descTextWrapper}>
                <Text style={styles.descText}>{$t('client.desc')}</Text>
              </View>
              <TextInput
                numberOfLines={5}
                multiline={true}
                style={styles.descInput}
                onChangeText={text => setDesc(text)}
                value={desc}
                placeholder={String(user.description)}
                placeholderTextColor={Colors.backgroundAppColor}
                textAlign={'center'}
              />
            </View>
            <View style={styles.itemCredWrapper}>
              <Text style={styles.itemCredText}>{$t('client.city')}</Text>
              <View style={styles.inputCredWrapper}>
                <TextInput
                  style={styles.credInput}
                  onChangeText={text => setCity(text)}
                  value={city}
                  placeholder={String(user.city)}
                  placeholderTextColor={Colors.lightGray}
                  textAlign={'center'}
                />
              </View>
            </View>
            <View style={styles.itemCredWrapper}>
              <Text style={styles.itemCredText}>{$t('client.phone')}</Text>
              <View style={styles.inputCredWrapper}>
                <TextInput
                  style={styles.credInput}
                  keyboardType={'numeric'}
                  onChangeText={text => setPhoneNumber(text)}
                  value={phoneNumber}
                  placeholder={String(user.phone_number)}
                  placeholderTextColor={Colors.lightGray}
                  textAlign={'center'}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={handleUpdateClient}
            >
              <Text style={styles.buttonText}>{$t('common.save')}</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <Icon.Fontisto
            style={styles.closeIcon}
            name={IconName.close}
            color={Colors.light}
            size={30}
            onPress={closeModal}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default EditClientProfileModal;

EditClientProfileModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  user: PropTypes.any
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 15
  },
  closeIcon: {
    position: 'absolute',
    right: 25,
    top: 25
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  credInput: {
    color: Colors.cloudColor,
    fontSize: 20
  },
  descInput: {
    backgroundColor: Colors.light,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    height: 100,
    marginTop: 10,
    width: '100%'
  },
  descText: {
    color: Colors.cloudColor,
    fontSize: 24
  },
  descTextWrapper: {
    alignItems: 'flex-end',
    width: '90%'
  },
  descWrapper: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 30,
    width: '100%'
  },
  gradientWrapper: {
    borderRadius: 40,
    height: '85%',
    paddingTop: 50
  },
  inputCredWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1,
    width: '70%'
  },
  inputField: {
    color: Colors.cloudColor,
    fontSize: 30
  },
  inputWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 70
  },
  itemCredText: {
    color: Colors.cloudColor,
    fontSize: 22,
    fontWeight: 'bold',
    width: '30%'
  },
  itemCredWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
    width: '100%'
  },
  itemText: {
    color: Colors.cloudColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 10,
    width: '100%'
  },
  unit: {
    color: Colors.light,
    position: 'absolute',
    right: -10,
    top: 0
  }
});
