import React from 'react';
import styles from './gallery.css';

const renderLoadingIndicator = () => {
  return 'Currently loading!';
}

const renderImages = (props) => {
  return <div className='gallery__images'>
   {
      props.images.map(imageUrl => {
        return <img src={imageUrl} onClick={() => props.imageClicked(imageUrl)} className='gallery__image' />
      }) 
    }
  </div>
}

const renderPinnedImage = (props) => {
  return props.isImagePinned && 
  <div className='gallery__pinned-image'>
    <img src={props.pinnedImageUrl} className='gallery__pinned-image__image' />
  </div>;
}

const Gallery = (props) => {
  return [
      <div className='gallery'>
        { props.isLoading ? renderLoadingIndicator() : renderImages(props) }
      </div>,
      renderPinnedImage(props)
    ];
};

export default Gallery;