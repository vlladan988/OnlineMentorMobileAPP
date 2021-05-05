import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { templateMealListSelector } from '../../../../store/selectors/TemplateMealSelector';

import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import { useSelector, useDispatch } from 'react-redux';
import { changeTemplateMealOrder } from '../../../../store/actions/TemplateMealActions';

const TemplateMealList = ({ template, showMealDetails }) => {
  const dispatch = useDispatch();
  const renderList = useSelector(templateMealListSelector());
  const [renderData, setRenderData] = useState(renderList);

  useEffect(
    () => {
      setRenderData(renderList);
    },
    [renderList]
  );

  const handleChangeOrder = data => {
    setRenderData(data);
    dispatch(
      changeTemplateMealOrder({
        orderList: data.map(data => data.id),
        templateId: template.id
      })
    );
  };

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        onPress={() => showMealDetails(item)}
        activeOpacity={0.7}
        style={[ShadowStyleLow, styles.itemWrapper]}
      >
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            isActive ? Colors.lightBackgroundAppColor : Colors.darkBackgroundAppColor,
            isActive ? Colors.lightBackgroundAppColor : Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.count}>{item.recipes.length} recipes</Text>
          </View>
          <Icon.AntDesign
            name={IconName.right}
            size={20}
            color={Colors.light}
            style={styles.icon}
          />
        </SharedLinearGradientBackgroundHorizontal>
        <View style={styles.sortWrapper} activeOpacity={0.6}>
          <View>
            <Icon.Entypo
              name={IconName.sort}
              color={isActive ? Colors.oker : Colors.light}
              size={28}
              style={styles.icon}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailWrapper}>
        <View>
          <Text style={styles.durationText}>Days: {template && template.template_duration}</Text>
          <Text style={styles.typeText}>Type: {template && template.template_meal_type}</Text>
        </View>
        <Text style={styles.countText}>Meals: {renderData.length}</Text>
      </View>
      <DraggableFlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={item => `draggable-item-${item.id}`}
        onDragEnd={data => handleChangeOrder(data.data)}
      />
    </View>
  );
};

export default TemplateMealList;

TemplateMealList.propTypes = {
  template: PropTypes.object,
  showMealDetails: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  count: {
    color: Colors.oker,
    fontFamily: 'montserrat-italic',
    fontSize: 16
  },
  countText: {
    color: Colors.light,
    fontSize: 20,
    textAlign: 'center'
  },
  detailWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  durationText: {
    color: Colors.oker,
    fontSize: 16,
    fontWeight: 'bold'
  },
  gradientWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '85%'
  },
  icon: {
    alignSelf: 'center'
  },
  itemName: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  sortWrapper: {
    backgroundColor: Colors.lightBackgroundAppColor,
    borderRadius: 10,
    justifyContent: 'center',
    width: '13%'
  },
  typeText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
