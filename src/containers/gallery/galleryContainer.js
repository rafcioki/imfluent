import { connect } from 'react-redux';
import Gallery from '../../components/gallery/gallery'
import { pinImage, unpinImage, movePinnedImageLeft, movePinnedImageRight } from '../../logic/gallery/galleryActions';

const mapStateToProps = (state) => {
  return {
    posts: state.images.images,
    isLoading: state.images.isLoading,
    isImagePinned: state.gallery.isImagePinned,
    pinnedImageUrl: state.gallery.pinnedImageUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pinImage: (imageUrl) => dispatch(pinImage(imageUrl)),
    unpinImage: () => dispatch(unpinImage()),
    movePinnedImageLeft: () => dispatch(movePinnedImageLeft()),
    movePinnedImageRight: () => dispatch(movePinnedImageRight()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);