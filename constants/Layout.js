import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = height * 0.3;

export default {
  window: {
    width,
    height,
    headerHeight
  },
  isSmallDevice: width < 375
};
