import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import $t from 'i18n';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../../../constants/Colors';
import richFroning from '../../../assets/images/richFroning.jpg';
import IconName from '../../../constants/IconName';
import { updateClient } from '../../../store/actions/ClientActions';
import { isCredEmpty } from '../../../helpers/IsCredEmpty';
import Layout from '../../../constants/Layout';

const EditClientProfileModal = ({ isVisible, closeModal, user }) => {
  const dispatch = useDispatch();

  const [age, setAge] = useState(user.age);
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [desc, setDesc] = useState(user.description);
  const [city, setCity] = useState(user.city);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [profileImage, setProfileImage] = useState(null);

  const pickProfileImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) setProfileImage(result);
  };

  const handleUpdateClient = () => {
    dispatch(
      updateClient({
        clientId: user.id,
        profileImage: profileImage ? profileImage.base64 : null,
        age: isCredEmpty(age) ? user.age : age,
        weight: isCredEmpty(weight) ? user.weight : weight,
        height: isCredEmpty(height) ? user.height : height,
        desc: isCredEmpty(desc) ? user.description : desc,
        city: isCredEmpty(city) ? user.city : city,
        phoneNumber: isCredEmpty(phoneNumber) ? user.phone_number : phoneNumber
      })
    );
    // setAge('');
    // setWeight('');
    // setHeight('');
    // setDesc('');
    // setCity('');
    // setPhoneNumber('');
    closeModal();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity onPress={closeModal} activeOpacity={1} style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <TouchableOpacity onPress={closeModal} activeOpacity={1} style={styles.scrollContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.modalWrapper}>
              <TouchableOpacity
                onPress={pickProfileImage}
                style={[styles.areaWrapper, styles.userWrapper]}
              >
                {profileImage ? (
                  <Image
                    source={profileImage ? { uri: profileImage.uri } : richFroning}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image
                    source={
                      user.photo_url
                        ? { uri: user.photo_url }
                        : profileImage
                          ? { uri: profileImage.uri }
                          : richFroning
                    }
                    style={styles.profileImage}
                  />
                )}
                <Text style={styles.userName}>{user.full_name}</Text>
              </TouchableOpacity>
              <View style={styles.areaWrapper}>
                <View style={styles.detailWrapper}>
                  <View style={styles.itemWrapper}>
                    <TextInput
                      value={String(age)}
                      autoCorrect={false}
                      autoFocus={false}
                      placeholder={'25'}
                      keyboardType={'number-pad'}
                      maxLength={2}
                      selectionColor={Colors.backgroundAppColor}
                      placeholderTextColor={Colors.lightGray}
                      onChangeText={text => setAge(text)}
                      style={styles.input}
                    />
                    <Text style={styles.itemName}>{$t('client.age')}</Text>
                  </View>
                  <View style={styles.itemWrapper}>
                    <TextInput
                      value={String(weight)}
                      autoCorrect={false}
                      placeholder={'80'}
                      keyboardType={'number-pad'}
                      maxLength={3}
                      selectionColor={Colors.backgroundAppColor}
                      placeholderTextColor={Colors.lightGray}
                      onChangeText={text => setWeight(text)}
                      style={styles.input}
                    />
                    <Text style={styles.itemName}>{$t('client.weight-kg')}</Text>
                  </View>
                  <View style={styles.itemWrapper}>
                    <TextInput
                      value={String(height)}
                      autoCorrect={false}
                      placeholder={'180'}
                      keyboardType={'number-pad'}
                      maxLength={3}
                      selectionColor={Colors.backgroundAppColor}
                      placeholderTextColor={Colors.lightGray}
                      onChangeText={text => setHeight(text)}
                      style={styles.input}
                    />
                    <Text style={styles.itemName}>{$t('client.height-cm')}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.areaWrapper}>
                <View style={styles.descWrapper}>
                  <TextInput
                    value={String(desc)}
                    autoCorrect={false}
                    placeholder={'Text about your self...'}
                    numberOfLines={5}
                    multiline={true}
                    selectionColor={Colors.backgroundAppColor}
                    placeholderTextColor={Colors.lightGray}
                    onChangeText={text => setDesc(text)}
                    style={styles.descriptionText}
                  />
                </View>
              </View>
              <View style={[styles.areaWrapper, styles.bottom]}>
                <View style={styles.credWrapper}>
                  <Icon.MaterialIcons
                    name={IconName.city}
                    color={Colors.backgroundAppColor}
                    size={26}
                    style={styles.icon}
                  />
                  <TextInput
                    value={String(city)}
                    autoCorrect={false}
                    placeholder={'France, Paris'}
                    selectionColor={Colors.backgroundAppColor}
                    placeholderTextColor={Colors.lightGray}
                    onChangeText={text => setCity(text)}
                    style={styles.inputCityAndNumber}
                  />
                </View>
                <View style={styles.credWrapper}>
                  <Icon.AntDesign
                    name={IconName.phone}
                    color={Colors.backgroundAppColor}
                    size={26}
                    style={styles.icon}
                  />
                  <TextInput
                    value={String(phoneNumber)}
                    autoCorrect={false}
                    placeholder={'0123456789'}
                    keyboardType={'number-pad'}
                    selectionColor={Colors.backgroundAppColor}
                    placeholderTextColor={Colors.lightGray}
                    onChangeText={text => setPhoneNumber(text)}
                    style={styles.inputCityAndNumber}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.buttonWrapper} onPress={handleUpdateClient}>
                <Text style={styles.buttonText}>{$t('common.save')}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableOpacity>
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
  areaWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    paddingHorizontal: 5
  },
  bottom: {
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: Layout.window.height
  },
  credWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  descWrapper: {
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1,
    paddingVertical: 20
  },
  descriptionText: {
    fontFamily: 'montserrat-italic',
    textAlign: 'center'
  },
  detailWrapper: {
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  icon: {
    paddingRight: 10
  },
  input: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 22,
    paddingHorizontal: 10
  },
  inputCityAndNumber: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingHorizontal: 10
  },
  itemName: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular'
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '33%'
  },
  modalWrapper: {
    backgroundColor: Colors.lightGrayBackground,
    borderRadius: 5
  },
  profileImage: {
    borderRadius: 30,
    height: 60,
    marginHorizontal: 10,
    width: 60
  },
  scrollContainer: {
    alignItems: 'center',
    height: Layout.window.height,
    justifyContent: 'center'
  },
  userName: {
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  userWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
