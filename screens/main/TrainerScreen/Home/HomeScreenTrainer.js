import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import authService from '../../../../services/AuthService';
import { useSelector, useDispatch } from 'react-redux';

import { addHeaderLeftNavigator } from '../../../../helpers';
import Colors from '../../../../constants/Colors';
import HeaderBarStyle from '../../../../constants/HeaderBarStyle';
import background from '../../../../assets/images/LightBackground.png';
import { userSelector } from '../../../../store/selectors/UserSelector';
import { fetchClients } from '../../../../store/actions/ClientActions';
import { clientListSelector } from '../../../../store/selectors/ClientSelector';

const HomeScreenTrainer = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector(userSelector());
  const clients = useSelector(clientListSelector());

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const userToken = async () => {
    console.log('juser', user);
    console.log('tokence', await authService.getToken());
    console.log('clients', clients);
  };

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.myClientsWrapper}>
        <Text style={styles.myClientsText}>My Clients:</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity
          onPress={() => userToken()}
          style={styles.clientDetailsWrapper}
        >
          <View style={styles.clientNameWrapper}>
            <Text style={styles.clientNameText}>Milos Nikolic</Text>
            <Text style={styles.clientDescText}>180cm 90kg</Text>
          </View>
          <View style={styles.workoutPlanWrapper}>
            <Text style={styles.workoutPlanText}>GYM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clientDetailsWrapper}>
          <View style={styles.clientNameWrapper}>
            <Text style={styles.clientNameText}>Ivan Arsic</Text>
            <Text style={styles.clientDescText}>180cm 90kg</Text>
          </View>
          <View style={styles.workoutPlanWrapper}>
            <Text style={styles.workoutPlanText}>WORKOUT</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clientDetailsWrapper}>
          <View style={styles.clientNameWrapper}>
            <Text style={styles.clientNameText}>Milos Nikolic</Text>
            <Text style={styles.clientDescText}>180cm 90kg</Text>
          </View>
          <View style={styles.workoutPlanWrapper}>
            <Text style={styles.workoutPlanText}>GYM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clientDetailsWrapper}>
          <View style={styles.clientNameWrapper}>
            <Text style={styles.clientNameText}>Igor Sentov</Text>
            <Text style={styles.clientDescText}>180cm 90kg</Text>
          </View>
          <View style={styles.workoutPlanWrapper}>
            <Text style={styles.workoutPlanText}>GYM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clientDetailsWrapper}>
          <View style={styles.clientNameWrapper}>
            <Text style={styles.clientNameText}>Dusan Lalic</Text>
            <Text style={styles.clientDescText}>180cm 90kg</Text>
          </View>
          <View style={styles.workoutPlanWrapper}>
            <Text style={styles.workoutPlanText}>CROSSFIT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.workoutPlanText}>
            {/* {user && user.full_name.toUpperCase()} Details */}
            Details
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => alert('Modal has been closed.')}
        >
          <SafeAreaView style={styles.container}>
            <View>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title={user.full_name}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

HomeScreenTrainer.navigationOptions = ({ navigation }) => {
  const headerLeftNav = addHeaderLeftNavigator(navigation);
  return {
    ...headerLeftNav,
    headerStyle: HeaderBarStyle,
    headerTitleStyle: { color: Colors.white, fontWeight: 'bold' },
    title: 'Home'
  };
};

export default HomeScreenTrainer;

const styles = StyleSheet.create({
  clientDescText: {
    color: Colors.lightText,
    fontSize: 14,
    fontWeight: 'bold'
  },
  clientDetailsWrapper: {
    alignSelf: 'center',
    backgroundColor: Colors.backgroundAppColor,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
    flexDirection: 'row',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    width: '90%'
  },
  clientNameText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  clientNameWrapper: {
    padding: 10,
    width: '70%'
  },
  container: {
    flex: 1
  },
  contentContainer: {
    paddingTop: 30
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  myClientsText: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold'
  },
  myClientsWrapper: {
    alignSelf: 'center',
    marginTop: 20
  },
  workoutPlanText: {
    color: Colors.black,
    fontWeight: 'bold'
  },
  workoutPlanWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderTopRightRadius: 10,
    flex: 1,
    justifyContent: 'center'
  }
});
