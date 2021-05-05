import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Icon from '@expo/vector-icons';
import moment from 'moment';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import StandardNotificationModal from '../../../shared/modal/StandardNotificationModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { getGallery, saveGallery } from '../../../../store/actions/GalleryActions';
import { userSelector } from '../../../../store/selectors/UserSelector';

const AddImage = () => {
  const dispatch = useDispatch();

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);

  const isStandardModalVisible = useSelector(showStandardPopUpSelector());
  const user = useSelector(userSelector());

  useEffect(() => {
    dispatch(getGallery(user.id));
  }, []);

  const pickImage = async typeImage => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) {
      if (typeImage === 'front') setFrontImage(result);
      else if (typeImage === 'back') setBackImage(result);
      else setSideImage(result);
    }
  };

  const handleUploadPhoto = () => {
    dispatch(
      saveGallery([
        frontImage && frontImage.base64,
        backImage && backImage.base64,
        sideImage && sideImage.base64
      ])
    );
    setFrontImage(null);
    setBackImage(null);
    setSideImage(null);
  };

  return (
    <>
      <StandardNotificationModal visible={isStandardModalVisible} />
      <View style={styles.pickerWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => pickImage('front')}
        >
          <Text style={styles.buttonText}>{$t('gallery.front')}</Text>
        </TouchableOpacity>
        <View>
          {frontImage ? (
            <TouchableOpacity activeOpacity={0.7} onPress={() => pickImage('front')}>
              <Image source={{ uri: frontImage.uri }} style={styles.image} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.deleteIcon}
                onPress={() => setFrontImage(null)}
              >
                <Icon.Fontisto name={IconName.close} size={32} color={Colors.warningColor} />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.noImage}
              onPress={() => pickImage('front')}
            />
          )}
        </View>
      </View>
      <View style={styles.pickerWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => pickImage('back')}
        >
          <Text style={styles.buttonText}>{$t('gallery.back')}</Text>
        </TouchableOpacity>
        <View>
          {backImage ? (
            <TouchableOpacity activeOpacity={0.7} onPress={() => pickImage('back')}>
              <Image source={{ uri: backImage.uri }} style={styles.image} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.deleteIcon}
                onPress={() => setBackImage(null)}
              >
                <Icon.Fontisto name={IconName.close} size={32} color={Colors.warningColor} />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.noImage}
              onPress={() => pickImage('back')}
            />
          )}
        </View>
      </View>
      <View style={styles.pickerWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => pickImage('side')}
        >
          <Text style={styles.buttonText}>{$t('gallery.side')}</Text>
        </TouchableOpacity>
        <View>
          {sideImage ? (
            <TouchableOpacity activeOpacity={0.7} onPress={() => pickImage('side')}>
              <Image source={{ uri: sideImage.uri }} style={styles.image} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.deleteIcon}
                onPress={() => setSideImage(null)}
              >
                <Icon.Fontisto name={IconName.close} size={32} color={Colors.warningColor} />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.noImage}
              onPress={() => pickImage('side')}
            />
          )}
        </View>
      </View>
      <View>
        <Text style={styles.dateText}>{$t('common.date')}:</Text>
        <Text style={styles.dateText}>{moment().format('ll')}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.saveButton} onPress={handleUploadPhoto}>
        <Text style={styles.saveButtonText}>{$t('common.save')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 35,
    paddingVertical: 10
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'montserrat-bold'
  },
  dateText: {
    alignSelf: 'center',
    fontFamily: 'montserrat-regular'
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    top: '45%'
  },
  image: {
    alignSelf: 'center',
    height: 250,
    marginVertical: 15,
    width: 250
  },
  noImage: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    height: 250,
    marginVertical: 10,
    width: 250
  },
  pickerWrapper: {
    paddingVertical: 20
  },
  saveButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 5,
    marginVertical: 15,
    paddingVertical: 10
  },
  saveButtonText: {
    color: Colors.white,
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    paddingHorizontal: 20
  }
});
