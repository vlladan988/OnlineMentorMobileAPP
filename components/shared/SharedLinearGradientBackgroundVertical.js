import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

const SharedLinearGradientBackgroundVertical = ({
  children,
  childrenStyle,
  childrenColors
}) => {
  return (
    <LinearGradient colors={childrenColors} style={childrenStyle}>
      {children}
    </LinearGradient>
  );
};

export default SharedLinearGradientBackgroundVertical;

SharedLinearGradientBackgroundVertical.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  childrenStyle: PropTypes.object,
  childrenColors: PropTypes.array
};
