import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import StandardNotificationModal from './StandardNotificationModal';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';
import Colors from '../../../constants/Colors';
import CreateEditTemplateHeaderImage from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/CreateEditTemplateHeaderImage';
import CreateEditSaveButton from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/CreateEditSaveButton';
import { addTemplate, updateTemplate } from '../../../store/actions/TemplateActions';
import ImagePickAndBackButtons from '../../Trainer/Nutritions/Template/Modal/CreateEditTemplate/ImagePickAndBackButtons';
import { IsEditScreen } from '../../../helpers/IsEditScreen';

const SharedCreateEditTemplateModal = ({ isVisible, template, screen, closeModal }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imgForUpload, setImgForUpload] = useState(null);
  const [mealType, setMealType] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [isPickImage, setIsPickImage] = useState(false);

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
  };

  const handleUpdateTemplate = () => {
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
      <StandardNotificationModal visible={false} />
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
      >
        <View style={styles.modalWrapper}>
          <CreateEditTemplateHeaderImage
            templateImage={imageUrl}
            setImage={changeImage}
            isPickImage={isPickImage}
            setIsPickImage={pickImage}
          />
          <ScrollView style={styles.scrollWrapper}>
            <ImagePickAndBackButtons closeModal={closeModal} setIsPickImage={pickImage} />
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Name*</Text>
              <TextInput
                style={styles.input}
                placeholder={'Gain Weight, Cut Weight...'}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setName(text)}
                value={name}
              />
            </View>
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Type</Text>
              <TextInput
                style={styles.input}
                placeholder={'Vegan, Detox, Keto...'}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setMealType(text)}
                value={mealType}
              />
            </View>
            <View style={styles.inputRegularWrapper}>
              <Text style={styles.inputText}>Duration</Text>
              <View style={styles.durationWrapper}>
                <TextInput
                  style={[styles.input, { color: Colors.oker }]}
                  placeholder={'0'}
                  keyboardType={'numeric'}
                  placeholderTextColor={Colors.lightGrayL}
                  onChangeText={text => setDuration(text)}
                  value={duration}
                />
                <Text style={styles.daysText}>Days</Text>
              </View>
            </View>
            <View style={styles.inputDescWrapper}>
              <Text style={styles.inputText}>Description</Text>
              <TextInput
                style={styles.input}
                placeholder={'Prepare Checken with Rice and vegetables...'}
                multiline={true}
                placeholderTextColor={Colors.lightGrayL}
                onChangeText={text => setDescription(text)}
                value={description}
              />
            </View>
            <CreateEditSaveButton
              screen={screen}
              submitForm={IsEditScreen(screen) ? handleUpdateTemplate : handleCreateTemplate}
            />
          </ScrollView>
        </View>
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
    fontSize: 18,
    fontWeight: 'bold'
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
