import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

const SharedLinearGradientBackgroundHorizontal = ({
  children,
  childrenStyle,
  childrenColors
}) => {
  return (
    <LinearGradient
      colors={childrenColors}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={childrenStyle}
    >
      {children}
    </LinearGradient>
  );
};

export default SharedLinearGradientBackgroundHorizontal;

SharedLinearGradientBackgroundHorizontal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  childrenStyle: PropTypes.object,
  childrenColors: PropTypes.array
};
