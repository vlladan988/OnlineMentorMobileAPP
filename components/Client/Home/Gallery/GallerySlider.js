import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';

import Colors from '../../../../constants/Colors';
import { gallerySelector } from '../../../../store/selectors/GallerySelector';
import avatar from '../../../../assets/images/richFroning.jpg';
import IconName from '../../../../constants/IconName';
import { deleteGallery } from '../../../../store/actions/GalleryActions';
import { dateFormat } from '../../../../helpers/DateFormat';
import { showDeletePopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { setShowDeletePopUp } from '../../../../store/actions/ErrorActions';
import SharedDeleteModal from '../../../shared/modal/SharedDeleteModal';

const GallerySlider = () => {
  const dispatch = useDispatch();

  const [galleryId, setGalleryId] = useState(null);

  const gallery = useSelector(gallerySelector());
  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());

  const saveGalleryId = id => {
    dispatch(setShowDeletePopUp('Delete Gallery ?'));
    setGalleryId(id);
  };

  const handleDeleteGallery = () => dispatch(deleteGallery(galleryId));

  return gallery.map((photo, index) => (
    <View key={index} style={styles.container}>
      <SharedDeleteModal isVisible={isDeleteModalVisible} handleDelete={handleDeleteGallery} />
      <View style={styles.header}>
        <View style={styles.profileWrapper}>
          <Image source={avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{photo.name}</Text>
            <Text style={styles.itemDate}>
              {dateFormat(photo.date)} - {photo.weight}
              kg
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => saveGalleryId(photo.id)}>
          <Icon.Fontisto name={IconName.close} size={32} color={Colors.backgroundAppColor} />
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
    marginTop: 10,
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
    borderColor: Colors.light,
    borderRadius: 50,
    borderWidth: 1,
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
