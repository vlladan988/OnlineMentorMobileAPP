import React, { useEffect, useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ImageBackground
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import $t from 'i18n';
import * as Icon from '@expo/vector-icons';

import { addHeaderRightNavigator } from '../../../helpers';
import Colors from '../../../constants/Colors';
import HeaderBarStyle from '../../../constants/HeaderBarStyle';
import avatar from '../../../assets/images/richFroning.jpg';
import background from '../../../assets/images/LightBackground.png';
import { fetchClients, getClient, deleteClient } from '../../../store/actions/ClientActions';
import { clientListSelector } from '../../../store/selectors/ClientSelector';
import { userSelector } from '../../../store/selectors/UserSelector';
import ShadowStyleLow from '../../../constants/ShadowStyleLow';
import IconName from '../../../constants/IconName';
import SharedDeleteModal from '../../../components/shared/modal/SharedDeleteModal';
import { showDeletePopUpSelector } from '../../../store/selectors/ErrorSelector';
import { setShowDeletePopUp } from '../../../store/actions/ErrorActions';

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [choosedClient, setChoosedClient] = useState({});

  const trainer = useSelector(userSelector());
  const clients = useSelector(clientListSelector());
  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());

  const [filteredList, setFilteredList] = useState(clients);

  const viewHeight = 490;

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  useEffect(
    () => {
      setFilteredList(clients);
    },
    [clients]
  );

  const handleSearchRecipeByLetter = letter => {
    setSearchText(letter);
    setFilteredList(
      clients.filter(item => item.full_name.toLowerCase().indexOf(letter.toLowerCase()) !== -1)
    );
  };

  const chooseClient = async id => dispatch(getClient(id));
  const keyExtractor = useCallback(item => item.id.toString(), []);

  const handleShowDeleteModal = client => {
    setChoosedClient(client);
    dispatch(setShowDeletePopUp('Delete Client ?'));
  };

  const handleDeleteClient = () => {
    dispatch(deleteClient(choosedClient.id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.container, ShadowStyleLow]}
      onPress={() => chooseClient(item.id)}
      activeOpacity={0.7}
    >
      <Image
        source={item.photo_url ? { uri: item.photo_url } : avatar}
        style={styles.profileImageLarge}
      />
      <View style={styles.detailWrapper}>
        <View style={styles.nameCityWrapper}>
          <Text style={styles.clientName}>{item.full_name}</Text>
          <Text style={styles.clientCity}>{item.city}</Text>
        </View>
        <View style={styles.clientDetails}>
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
        <Icon.MaterialCommunityIcons
          onPress={() => handleShowDeleteModal(item)}
          name={IconName.deleteCircle}
          size={32}
          style={styles.deleteIcon}
          color={Colors.light}
        />
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
      <SharedDeleteModal isVisible={isDeleteModalVisible} handleDelete={handleDeleteClient} />
      <View style={styles.headerWrapper}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.helloText}>{trainer.full_name}</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Icon.AntDesign
          name={IconName.search}
          size={26}
          style={styles.searchIcon}
          color={Colors.backgroundAppColor}
        />
        <TextInput
          style={styles.inputSearchField}
          placeholder={'Search clients'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => handleSearchRecipeByLetter(text)}
          value={searchText}
          selectionColor={Colors.backgroundAppColor}
        />
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.countText}>Count: {filteredList.length}</Text>
      </View>
      <FlatList
        data={filteredList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.listWrapper}
      />
    </ImageBackground>
  );
};

WelcomeScreen.navigationOptions = ({ navigation }) => {
  const headerRightNav = addHeaderRightNavigator(navigation);
  return {
    ...headerRightNav,
    headerStyle: HeaderBarStyle,
    headerTitleStyle: { color: Colors.white, fontFamily: 'montserrat-bold' },
    title: 'Client List'
  };
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  clientCity: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingLeft: 30
  },
  clientDetails: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  clientName: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    paddingLeft: 30
  },
  container: {
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 5
  },
  countText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    paddingVertical: 2
  },
  countWrapper: {
    paddingLeft: 10,
    paddingTop: 25
  },
  deleteIcon: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  detailWrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    bottom: 0,
    justifyContent: 'flex-end',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 5
  },
  helloText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 22
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  inputSearchField: {
    color: Colors.backgroundAppColor,
    flex: 1,
    fontFamily: 'montserrat-regular',
    height: 40
  },
  itemName: {
    color: Colors.light,
    fontFamily: 'montserrat-italic'
  },
  itemValue: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemWrapper: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '33%'
  },
  listWrapper: {
    paddingTop: 20
  },
  nameCityWrapper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingBottom: 20
  },
  profileImageLarge: {
    borderRadius: 20,
    height: 250,
    width: '100%'
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20
  }
});
