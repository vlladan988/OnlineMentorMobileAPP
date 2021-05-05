import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';

const DetailSliderComp = ({ trainer }) => {
  return (
    <>
      <View style={styles.trainerWrapper}>
        <Text style={styles.trainerText}>Details</Text>
      </View>
      <View style={styles.detailWrapper}>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.MaterialIcons name={IconName.email} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.email}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.Entypo name={IconName.workout} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.main_sport}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.Feather name={IconName.facebook} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.facebook}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.AntDesign name={IconName.instagram} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.instagram}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.AntDesign name={IconName.phone} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.phone_number}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.Ionicons name={IconName.body} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>
            {trainer.height} Cm, {trainer.weight} Kg
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.detailIconWrapper}>
            <Icon.FontAwesome name={IconName.age} color={Colors.light} size={22} />
          </View>
          <Text style={styles.itemText}>{trainer.age}</Text>
        </View>
      </View>
    </>
  );
};

export default DetailSliderComp;

DetailSliderComp.propTypes = {
  trainer: PropTypes.any
};

const styles = StyleSheet.create({
  detailIconWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundAppColor,
    borderRadius: 50,
    height: 35,
    justifyContent: 'center',
    marginRight: 20,
    width: 35
  },
  detailWrapper: {
    paddingTop: 20
  },
  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 30,
    marginTop: 10
  },
  itemText: {
    fontFamily: 'montserrat-regular'
  },
  trainerText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    paddingBottom: 5
  },
  trainerWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 30,
    paddingTop: 40
  }
});
