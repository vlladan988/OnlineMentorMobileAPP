import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import AminimatedItemMenu from './AnimatedItemMenu';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';

const ListGroceries = ({
  renderListGroceries,
  handleChooseGrocery,
  showEditGroceryModal,
  deleteGrocery
}) => {
  const [choosedItem, setChoosedItem] = useState(false);

  const handleShowDropdown = item => {
    item === choosedItem ? setChoosedItem(false) : setChoosedItem(item);
    handleChooseGrocery(item);
  };

  const handleUpdateGrocery = () => {
    setChoosedItem(false);
    showEditGroceryModal();
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 70,
      offset: 70 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity style={ShadowStyleLow}>
        <LinearGradient
          colors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientWrapper}
        >
          <View style={styles.item}>
            <Text style={styles.nameText}>
              {item.name} ({item.unit_type}
              {item.unit})
            </Text>
            <View style={styles.menuWrapper}>
              {item.id == choosedItem.id ? (
                <AminimatedItemMenu
                  updateGrocery={handleUpdateGrocery}
                  deleteGrocery={deleteGrocery}
                />
              ) : null}
              <Icon.MaterialCommunityIcons
                onPress={() => handleShowDropdown(item)}
                name={
                  item.id == choosedItem.id
                    ? IconName.closeOct
                    : IconName.dotsIcon
                }
                color={Colors.light}
                size={30}
                style={styles.optionIcon}
              />
            </View>
          </View>
          <View style={styles.itemValWrapper}>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.proteins')}</Text>
              <Text style={styles.proteinValText}>{item.proteins}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.carbonUh')}</Text>

              <Text style={styles.carbonsValText}>{item.carbons}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.fats')}</Text>

              <Text style={styles.fatValText}>{item.fats}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.calories')}</Text>
              <Text style={styles.calorieValText}>{item.calories}</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={renderListGroceries}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default ListGroceries;

ListGroceries.propTypes = {
  renderListGroceries: PropTypes.array,
  handleChooseGrocery: PropTypes.func,
  showEditGroceryModal: PropTypes.func,
  deleteGrocery: PropTypes.func
};

const styles = StyleSheet.create({
  calorieValText: {
    color: Colors.warningColor,
    fontSize: 22
  },
  carbonsValText: {
    color: Colors.mainYellow,
    fontSize: 22
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  fatValText: {
    color: Colors.oker,
    fontSize: 22
  },
  flatListStyle: {
    paddingTop: 50
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 20
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemVal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  itemValWrapper: {
    flexDirection: 'row',
    paddingTop: 30
  },
  menuWrapper: {
    flexDirection: 'row'
  },
  nameText: {
    color: Colors.light,
    fontSize: 20
  },
  optionIcon: {
    padding: 5
  },
  proteinValText: {
    color: Colors.cloudColor,
    fontSize: 22
  },
  val: {
    color: Colors.light
  }
});
