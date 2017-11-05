import { connect } from 'react-redux';
import ImagesList from '../../components/images-list/imagesList'

const mapStateToProps = (state) => {
  return {
    images: state.images,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(ImagesList);