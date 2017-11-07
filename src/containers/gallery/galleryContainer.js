import { connect } from 'react-redux';
import Gallery from '../../components/gallery/gallery'
import { imageClicked } from '../../logic/gallery/galleryActions';

const mapStateToProps = (state) => {
  return {
    images: state.images.images,
    isLoading: state.images.isLoading,
    isImagePinned: state.gallery.isImagePinned,
    pinnedImageUrl: state.gallery.pinnedImageUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageClicked: (imageUrl) => dispatch(imageClicked(imageUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);