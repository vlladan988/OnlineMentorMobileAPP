import React, { useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import $t from 'i18n';

import { addHeaderRightNavigator } from '../../../helpers';
import Colors from '../../../constants/Colors';
import HeaderBarStyle from '../../../constants/HeaderBarStyle';
import background from '../../../assets/images/LightBackground.png';
import avatar from '../../../assets/images/richFroning.jpg';
import { fetchClients, getClient, deleteClient } from '../../../store/actions/ClientActions';
import { clientListSelector } from '../../../store/selectors/ClientSelector';
import { dateFormat } from '../../../helpers/DateFormat';

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const clients = useSelector(clientListSelector());

  const viewHeight = 490;

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const chooseClient = async id => dispatch(getClient(id));
  const keyExtractor = useCallback(item => item.id.toString(), []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container} onPress={() => chooseClient(item.id)}>
      <TouchableOpacity style={styles.header} onPress={() => dispatch(deleteClient(item.id))}>
        <View style={styles.headerLeft}>
          <Image source={avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{item.full_name}</Text>
            <Text style={styles.itemDateAndKg}>{dateFormat(item.created_at)}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.itemDateAndKg}>
            {item.weight} {$t('client.kg')}
          </Text>
          <Text style={styles.itemDateAndKg}>{item.city}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Image source={avatar} style={styles.profileImageLarge} />
        <View style={styles.detailWrapper}>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{item.age}</Text>
            <Text style={styles.itemName}>{$t('client.age')}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{item.weight}</Text>
            <Text style={styles.itemName}>{$t('client.weight-kg')}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemValue}>{item.height}</Text>
            <Text style={styles.itemName}>{$t('client.height-cm')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: viewHeight,
      offset: viewHeight * index,
      index
    }),
    []
  );

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.myClientsWrapper}>
        <Text style={styles.myClientsText}>MY CLIENTS:</Text>
      </View>
      <FlatList
        data={clients}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.list}
      />
    </ImageBackground>
  );
};

WelcomeScreen.navigationOptions = ({ navigation }) => {
  const headerRightNav = addHeaderRightNavigator(navigation);
  return {
    ...headerRightNav,
    headerStyle: HeaderBarStyle,
    headerTitleStyle: { color: Colors.white, fontWeight: 'bold' },
    title: 'Client List'
  };
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    elevation: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0
  },
  detailWrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    right: 0
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerRight: {
    alignItems: 'flex-end'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  itemDateAndKg: {
    fontSize: 12
  },
  itemName: {
    color: Colors.light
  },
  itemValue: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '33%'
  },
  myClientsText: {
    color: Colors.backgroundAppColor,
    fontSize: 24,
    fontWeight: 'bold'
  },
  myClientsWrapper: {
    alignSelf: 'center',
    marginTop: 20
  },
  name: {
    fontSize: 16
  },
  profileImage: {
    borderColor: Colors.warningColor,
    borderRadius: 50,
    borderWidth: 2,
    height: 50,
    marginRight: 10,
    marginVertical: 10,
    width: 50
  },
  profileImageLarge: {
    height: 400,
    width: '100%'
  }
});
