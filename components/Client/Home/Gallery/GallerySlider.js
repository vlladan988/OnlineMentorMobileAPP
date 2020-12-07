import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import { gallerySelector } from '../../../../store/selectors/GallerySelector';
import avatar from '../../../../assets/images/richFroning.jpg';
import IconName from '../../../../constants/IconName';
import { deleteGallery } from '../../../../store/actions/GalleryActions';
import DeleteGalleryModal from '../../../shared/modal/DeleteGalleryModal';
import { dateFormat } from '../../../../helpers/DateFormat';

const GallerySlider = () => {
  const dispatch = useDispatch();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [galleryId, setGalleryId] = useState(null);
  const gallery = useSelector(gallerySelector());

  const saveGalleryId = id => {
    setGalleryId(id);
    showModal();
  };

  const showModal = () => setDeleteModalVisible(!deleteModalVisible);

  const handleDeleteGallery = () => {
    dispatch(deleteGallery(galleryId));
    showModal();
  };

  return gallery.map((photo, index) => (
    <View key={index} style={styles.container}>
      <DeleteGalleryModal
        isVisible={deleteModalVisible}
        closeModal={showModal}
        handleDeleteGallery={handleDeleteGallery}
      />
      <View style={styles.header}>
        <View style={styles.profileWrapper}>
          <Image source={avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{photo.name}</Text>
            <Text style={styles.itemDate}>
              {dateFormat(photo.date)} - {photo.weight}
              {photo.id} {$t('common.kg')}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => saveGalleryId(photo.id)}
        >
          <Icon.Entypo name={IconName.dots} color={Colors.black} size={24} />
        </TouchableOpacity>
      </View>
      <SliderBox
        dotColor={Colors.cloudColor}
        images={photo.photos}
        sliderBoxHeight={400}
        imageLoadingColor={Colors.cloudColor}
      />
    </View>
  ));
};

export default GallerySlider;

const styles = StyleSheet.create({
  container: {
    elevation: 24,
    marginTop: 50,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0
  },
  dateWeightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconWrapper: {
    justifyContent: 'center',
    margin: 10
  },
  itemDate: {
    fontSize: 12
  },
  itemWeight: {
    fontSize: 18
  },
  name: {
    fontSize: 16
  },
  profileImage: {
    borderColor: Colors.warningColor,
    borderRadius: 50,
    borderWidth: 2,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 50
  },
  profileWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
