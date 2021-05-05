import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import $t from 'i18n';
import { TextInputField } from '../../shared/FormFields';
import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import { IsFieldEmpty } from '../../../helpers/IsFieldEmpty';
import SharedLinearGradientBackgroundHorizontal from '../../shared/SharedLinearGradientBackgroundHorizontal';

export const UpdateTrainerForm = ({ trainer, onSubmit }) => (
  <Formik
    initialValues={{
      city: trainer.city,
      mainSport: trainer.main_sport,
      phoneNumber: trainer.phone_number,
      facebook: trainer.facebook,
      instagram: trainer.instagram,
      description: trainer.description,
      age: String(trainer.age),
      weight: String(trainer.weight),
      height: String(trainer.height)
    }}
    onSubmit={onSubmit}
    // validationSchema={updateProfileValidationRules}
    validationSchema={{}}
  >
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <View style={styles.detailWrapper}>
            <View style={styles.itemWrapper}>
              <Field
                name="age"
                component={TextInputField}
                placeholder={String(IsFieldEmpty(trainer.age))}
                style={styles.itemValue}
                placeholderTextColor={Colors.warningText}
              />
              <Text style={styles.itemName}>
                {$t('client.age')} {trainer.age}
              </Text>
            </View>
            <View style={styles.itemWrapper}>
              <Field
                name="weight"
                component={TextInputField}
                placeholder={String(IsFieldEmpty(trainer.weight))}
                style={styles.itemValue}
                placeholderTextColor={Colors.warningText}
              />
              <Text style={styles.itemName}>{$t('client.weight-kg')}</Text>
            </View>
            <View style={styles.itemWrapper}>
              <Field
                name="height"
                component={TextInputField}
                placeholder={String(IsFieldEmpty(trainer.height))}
                style={styles.itemValue}
                placeholderTextColor={Colors.warningText}
              />
              <Text style={styles.itemName}>{$t('client.height-cm')}</Text>
            </View>
          </View>
          <View style={styles.fieldWrapper}>
            <View style={styles.inputFieldWrapper}>
              <Icon.MaterialIcons
                name={IconName.city}
                color={Colors.lightText}
                size={22}
                style={styles.icon}
              />
              <View style={styles.input}>
                <Field
                  name="city"
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.city)}
                  style={styles.inputField}
                  placeholderTextColor={Colors.warningText}
                />
              </View>
            </View>
            <View style={styles.inputFieldWrapper}>
              <Icon.FontAwesome5
                name={IconName.userAdd}
                color={Colors.lightText}
                size={22}
                style={styles.icon}
              />
              <View style={styles.input}>
                <Field
                  name="mainSport"
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.main_sport)}
                  style={styles.inputField}
                  placeholderTextColor={Colors.warningText}
                />
              </View>
            </View>
            <View style={styles.inputFieldWrapper}>
              <Icon.AntDesign
                name={IconName.phone}
                color={Colors.lightText}
                size={22}
                style={styles.icon}
              />
              <View style={styles.input}>
                <Field
                  name="phoneNumber"
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.phone_number)}
                  style={styles.inputField}
                  placeholderTextColor={Colors.warningText}
                  keyboardType={'phone-pad'}
                />
              </View>
            </View>
            <View style={styles.inputFieldWrapper}>
              <Icon.Feather
                name={IconName.facebook}
                color={Colors.lightText}
                size={22}
                style={styles.icon}
              />
              <View style={styles.input}>
                <Field
                  name="facebook"
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.facebook)}
                  style={styles.inputField}
                  placeholderTextColor={Colors.warningText}
                />
              </View>
            </View>
            <View style={styles.inputFieldWrapper}>
              <Icon.AntDesign
                name={IconName.instagram}
                color={Colors.lightText}
                size={22}
                style={styles.icon}
              />
              <View style={styles.input}>
                <Field
                  name="instagram"
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.instagram)}
                  style={styles.inputField}
                  placeholderTextColor={Colors.warningText}
                />
              </View>
            </View>
            <View style={styles.inputFieldDescWrapper}>
              <View style={styles.input}>
                <Field
                  name="description"
                  numberOfLines={4}
                  multiline={true}
                  component={TextInputField}
                  placeholder={IsFieldEmpty(trainer.description)}
                  style={styles.inputFieldDesc}
                  placeholderTextColor={Colors.warningText}
                />
              </View>
            </View>
          </View>
        </View>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
          childrenStyle={styles.buttonWrapper}
        >
          <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
            <Text style={styles.registerText}>{$t('profile.updateUser.update')}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    )}
  </Formik>
);

UpdateTrainerForm.propTypes = {
  onSubmit: PropTypes.func,
  trainer: PropTypes.object
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '40%'
  },
  container: {
    paddingBottom: 20
  },
  detailWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  fieldWrapper: {
    paddingTop: 10
  },
  icon: {
    left: 0,
    position: 'absolute',
    zIndex: 9
  },
  input: {
    width: '100%'
  },
  inputField: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    height: 50,
    textAlign: 'center'
  },
  inputFieldDesc: {
    color: Colors.light,
    fontFamily: 'montserrat-italic',
    height: 50,
    marginVertical: 20,
    textAlign: 'center'
  },
  inputFieldDescWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  inputFieldWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  inputWrapper: {
    paddingHorizontal: 20
  },
  itemName: {
    color: Colors.lightGray
  },
  itemValue: {
    color: Colors.cloudColor,
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    minWidth: 40,
    textAlign: 'center'
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '33%'
  },
  registerButton: {
    alignItems: 'center',
    paddingVertical: 15
  },
  registerText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
