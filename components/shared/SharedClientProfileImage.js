import React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import cover from '../../assets/images/crossfit.jpg';
import richFroning from '../../assets/images/richFroning.jpg';
import Font from '../../constants/Font';

const SharedClientProfileImage = ({ client }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} style={styles.coverImage}>
        <View style={styles.background}>
          <View>
            <Image
              source={client.photo_url ? { uri: client.photo_url } : richFroning}
              style={styles.coverImageSmall}
            />
          </View>
          <Text style={styles.nameText}>{client.full_name}</Text>
          <Text style={styles.cityText}>{client.city}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SharedClientProfileImage;

SharedClientProfileImage.propTypes = {
  user: PropTypes.object,
  client: PropTypes.object
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  cityText: {
    color: Colors.light,
    fontFamily: 'montserrat-italic',
    fontSize: Font.small
  },
  container: {
    height: 200
  },
  coverImage: {
    height: 200,
    width: Layout.window.width
  },
  coverImageSmall: {
    borderColor: Colors.white,
    borderRadius: 45,
    borderWidth: 1,
    height: 90,
    width: 90
  },
  nameText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: Font.large,
    marginTop: 10
  }
});
