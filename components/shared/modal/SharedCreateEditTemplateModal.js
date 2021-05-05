import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';
import Colors from '../../../constants/Colors';
import CreateEditTemplateHeaderImage from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/CreateEditTemplateHeaderImage';
import CreateEditSaveButton from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/CreateEditSaveButton';
import { addTemplate, updateTemplate } from '../../../store/actions/TemplateActions';
import ImagePickAndBackButtons from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/ImagePickAndBackButtons';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import { inputFealdErrorMessage } from '../../../store/selectors/ErrorSelector';
import ErrorText from '../Text/ErrorText';
import { requiredFieldsValidation } from '../../../helpers/RequiredFieldsValidation';
import { setInputFealdError } from '../../../store/actions/ErrorActions';

const SharedCreateEditTemplateModal = ({ isVisible, template, screen, closeModal }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imgForUpload, setImgForUpload] = useState(null);
  const [mealType, setMealType] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [isPickImage, setIsPickImage] = useState(false);

  const errorMessage = useSelector(inputFealdErrorMessage());

  useEffect(() => {
    if (IsEditScreen(screen)) {
      setName(template.name);
      setImageUrl(template.template_image_url);
      setMealType(template.template_meal_type);
      setDescription(template.template_description);
      setDuration(template.template_duration);
    } else {
      resetData();
    }
    setImgForUpload(null);
  }, []);

  const handleCreateTemplate = () => {
    if (requiredFieldsValidation(new Array(name))) {
      dispatch(setInputFealdError('The Name field is required.'));
    } else {
      dispatch(
        addTemplate({
          name,
          imageUrl: imgForUpload,
          mealType,
          description,
          duration
        })
      );
      resetData();
      closeModal();
    }
  };

  const handleUpdateTemplate = () => {
    if (requiredFieldsValidation(new Array(name))) {
      dispatch(setInputFealdError('The Name field is required.'));
    } else {
      dispatch(
        updateTemplate({
          id: template.id,
          name,
          isImageChanged: imgForUpload !== null,
          imageUrl: imgForUpload,
          mealType,
          description,
          duration
        })
      );
      closeModal();
    }
  };

  const handleGoBack = () => {
    dispatch(setInputFealdError(''));
    closeModal();
  };

  const resetData = () => {
    setName('');
    setImageUrl(null);
    setImgForUpload(null);
    setMealType('');
    setDescription('');
    setDuration('');
  };

  const pickImage = toValue => setIsPickImage(toValue);

  const changeImage = img => {
    setImgForUpload(img.base64);
    setImageUrl(img.uri);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
      >
        <KeyboardAwareScrollView enableOnAndroid style={styles.modalWrapper}>
          <CreateEditTemplateHeaderImage
            templateImage={imageUrl}
            goBack={handleGoBack}
            setImage={changeImage}
            isPickImage={isPickImage}
            setIsPickImage={pickImage}
          />
          <ScrollView style={styles.scrollWrapper}>
            <ImagePickAndBackButtons setIsPickImage={pickImage} />
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Name*</Text>
              <TextInput
                style={styles.input}
                placeholder={'Gain Weight, Cut Weight...'}
                autoCorrect={false}
                onEndEditing={() => dispatch(setInputFealdError(''))}
                clearButtonMode={'always'}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setName(text)}
                value={name}
                selectionColor={Colors.light}
              />
            </View>
            <ErrorText error={!!errorMessage} message={errorMessage} />
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Type</Text>
              <TextInput
                style={styles.input}
                placeholder={'Vegan, Detox, Keto...'}
                autoCorrect={false}
                clearButtonMode={'always'}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setMealType(text)}
                value={mealType}
                selectionColor={Colors.light}
              />
            </View>
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Duration</Text>
              <View style={styles.durationWrapper}>
                <TextInput
                  style={[styles.input, { color: Colors.oker }]}
                  placeholder={'0'}
                  autoCorrect={false}
                  keyboardType={'number-pad'}
                  placeholderTextColor={Colors.lightGrayL}
                  onChangeText={text => setDuration(text)}
                  value={duration}
                  selectionColor={Colors.light}
                />
                <Text style={styles.daysText}>Days</Text>
              </View>
            </View>
            <View style={styles.inputDescWrapper}>
              <Text style={styles.inputText}>Description</Text>
              <TextInput
                style={styles.input}
                placeholder={'Prepare Checken with Rice and vegetables...'}
                autoCorrect={false}
                multiline={true}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setDescription(text)}
                value={description}
                selectionColor={Colors.light}
              />
            </View>
            <CreateEditSaveButton
              screen={screen}
              submitForm={IsEditScreen(screen) ? handleUpdateTemplate : handleCreateTemplate}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default SharedCreateEditTemplateModal;

SharedCreateEditTemplateModal.propTypes = {
  closeModal: PropTypes.func,
  isVisible: PropTypes.bool,
  screen: PropTypes.string,
  template: PropTypes.object
};

const styles = StyleSheet.create({
  daysText: {
    color: Colors.oker,
    fontFamily: 'montserrat-regular',
    fontSize: 18
  },
  durationWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    color: Colors.light,
    flex: 1,
    fontFamily: 'montserrat-italic',
    minHeight: 40,
    paddingLeft: 10
  },
  inputDescWrapper: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    margin: 10
  },
  inputRegularWrapper: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    margin: 10
  },
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  modalWrapper: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    width: '100%'
  }
});
