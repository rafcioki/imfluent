import { connect } from 'react-redux';
import Gallery from '../../components/gallery/gallery'
import { imageClicked, imageClosed } from '../../logic/gallery/galleryActions';

const mapStateToProps = (state) => {
  return {
    posts: state.images.images,
    isLoading: state.images.isLoading,
    isImagePinned: state.gallery.isImagePinned,
    pinnedImageUrl: state.gallery.pinnedImageUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageClicked: (imageUrl) => dispatch(imageClicked(imageUrl)),
    imageClosed: () => dispatch(imageClosed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);