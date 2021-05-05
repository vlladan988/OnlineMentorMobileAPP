import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Icon from '@expo/vector-icons';
import moment from 'moment';

import avatar from '../../../../assets/images/richFroning.jpg';
import SharedLinearGradientBackgroundVertical from '../../../shared/SharedLinearGradientBackgroundVertical';
import Colors from '../../../../constants/Colors';
import { clientListSelector } from '../../../../store/selectors/ClientSelector';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import IconName from '../../../../constants/IconName';
import NavigationService from '../../../../services/NavigationService';

const DailyNutritionPlan = () => {
  const [startDate, setStartDate] = useState(
    moment()
      .format('ll')
      .toString()
  );
  const clients = useSelector(clientListSelector());

  const handleChoosedClient = item => {
    NavigationService.navigate('DailyMealsScreenTrainer', {
      date: startDate,
      client: item
    });
    sheetRef.current.snapTo(1);
  };

  const onDateChange = date =>
    setStartDate(
      moment(date)
        .format('ll')
        .toString()
    );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 71,
      offset: 71 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemWrapper}
      activeOpacity={0.7}
      onPress={() => handleChoosedClient(item)}
    >
      <Image source={avatar} style={styles.profileImage} />
      <View style={styles.detailWrapper}>
        <View>
          <Text style={styles.nameText}>{item.full_name}</Text>
          <Text style={styles.cityText}>{item.city}</Text>
        </View>
        <Icon.AntDesign name={IconName.success} size={26} color={Colors.cloudColor} />
      </View>
    </TouchableOpacity>
  );

  const renderContent = () => (
    <View style={styles.contentWrapper}>
      <View style={styles.line} />
      <FlatList
        data={clients}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
        childrenStyle={styles.linearGradientWrapper}
      >
        <View>
          <Text style={styles.stepText}>Select day</Text>
          <CalendarPicker
            onDateChange={onDateChange}
            selectedDayColor={Colors.cloudColor}
            textStyle={styles.calendarTextStyle}
            startFromMonday={true}
            todayBackgroundColor="transparent"
            todayTextStyle={Colors.light}
          />
        </View>
        <View style={styles.step2Wrapper}>
          <TouchableOpacity
            style={[ShadowStyleLow, styles.buttonWrapper]}
            onPress={() => sheetRef.current.snapTo(0)}
          >
            <Text style={styles.text}>Select Client</Text>
          </TouchableOpacity>
        </View>
      </SharedLinearGradientBackgroundVertical>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[400, 0, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
      />
    </>
  );
};

export default DailyNutritionPlan;

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  calendarTextStyle: {
    color: Colors.light,
    fontFamily: 'montserrat-italic'
  },
  cityText: {
    fontFamily: 'montserrat-italic'
  },
  contentWrapper: {
    backgroundColor: Colors.light,
    height: 400
  },
  detailWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  itemWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 5
  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrayL,
    borderRadius: 20,
    height: 10,
    marginVertical: 20,
    width: 80
  },
  linearGradientWrapper: {
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  nameText: {
    fontFamily: 'montserrat-regular',
    fontSize: 18
  },
  profileImage: {
    borderRadius: 50,
    height: 50,
    margin: 10,
    width: 50
  },
  step2Wrapper: {
    alignSelf: 'center',
    paddingBottom: 30
  },
  stepText: {
    alignSelf: 'center',
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 26,
    paddingVertical: 20
  },
  text: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 24
  }
});
