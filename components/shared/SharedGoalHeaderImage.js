import React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Layout from '../../constants/Layout';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import progress from '../../assets/images/progress.jpg';
import progressWomen from '../../assets/images/progressWomen.jpg';
import Colors from '../../constants/Colors';
import { isClient } from '../../helpers/IsClient';
import IconName from '../../constants/IconName';
import Font from '../../constants/Font';

const SharedGoalHeaderImage = ({ user, showEditModal }) => {
  return (
    <ImageBackground source={progressWomen} style={styles.coverImage}>
      <View style={styles.background}>
        <Image source={progress} style={styles.coverImageSmall} />
        <Text style={styles.nameText}>Set goal</Text>
      </View>
      {isClient(user) && (
        <TouchableOpacity style={styles.editIcon} onPress={showEditModal}>
          <Icon.Entypo name={IconName.edit} size={22} color={Colors.light} />
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

export default SharedGoalHeaderImage;

SharedGoalHeaderImage.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showEditModal: PropTypes.func
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
  editIcon: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  nameText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: Font.large,
    marginTop: 10
  }
});
