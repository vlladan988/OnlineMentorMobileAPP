import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { ErrorMessage } from 'formik';
import Colors from '../../constants/Colors';

export const TextInputField = ({ field, form, ...props }) => {
  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        {...props}
      />
      <View style={styles.errorTextWrapper}>
        <ErrorMessage style={styles.errorText} name={field.name} component={Text} />
      </View>
    </View>
  );
};

TextInputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.warningColor
  },
  errorTextWrapper: {
    alignItems: 'center'
  }
});
