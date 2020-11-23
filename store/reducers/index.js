import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import loaderReducer from './LoaderReducer';
import errorReducer from './ErrorReducer';
import clientReducer from './ClientReducer';
import goalReducer from './GoalReducer';
import galleryReducer from './GalleryReducer';
import trainerReducer from './TrainerReducer';

export default combineReducers({
  userReducer,
  loaderReducer,
  errorReducer,
  clientReducer,
  goalReducer,
  galleryReducer,
  trainerReducer
});
