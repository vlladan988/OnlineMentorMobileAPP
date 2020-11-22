import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { SliderBox } from 'react-native-image-slider-box';

import Colors from '../../../../constants/Colors';
import { gallerySelector } from '../../../../store/selectors/GallerySelector';
import avatar from '../../../../assets/images/richFroning.jpg';
import { getGallery } from '../../../../store/actions/GalleryActions';
import { currentClientSelector } from '../../../../store/selectors/ClientSelector';

const GallerySlider = () => {
  const dispatch = useDispatch();

  const gallery = useSelector(gallerySelector());
  const client = useSelector(currentClientSelector());
  const viewHeight = 474;

  useEffect(() => {
    dispatch(getGallery(client.id));
  }, []);

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: viewHeight,
      offset: viewHeight * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileWrapper}>
          <Image source={avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.itemDateAndKg}>
              {moment(item.date).format('ll')}
            </Text>
            <Text style={styles.itemDateAndKg}>{item.weight} kg</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cityWrapper}>
          <Text>{item.city}</Text>
        </TouchableOpacity>
      </View>
      <SliderBox
        dotColor={Colors.cloudColor}
        images={item.photos}
        sliderBoxHeight={400}
        imageLoadingColor={Colors.cloudColor}
      />
    </View>
  );

  return (
    <FlatList
      data={gallery}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.list}
    />
  );
};

export default GallerySlider;

const styles = StyleSheet.create({
  cityWrapper: {
    justifyContent: 'center',
    margin: 10
  },
  container: {
    elevation: 24,
    paddingBottom: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemDateAndKg: {
    fontSize: 12
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
    resizeMode: 'contain',
    width: 50
  },
  profileWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
