import { combineReducers } from 'redux';
import ImagesLoadingReducer from './logic/imagesLoading/imagesLoadingReducer';
import GalleryReducer from './logic/gallery/galleryReducer';

export default combineReducers({
  images: ImagesLoadingReducer,
  gallery: GalleryReducer
});