import React from 'react';
import styles from './gallery.css';

function handleImageClicked(event, props, imageUrl) {
  props.imageClicked(imageUrl);
  event.preventDefault();
}

const renderLoadingIndicator = () => {
  return 'Currently loading!';
}

const renderImages = (props) => {
  return <div className='gallery__images'>
   {
      props.posts.map(post => {
        return <a className="gallery__image" href={post.imageUrl} onClick={(e) => handleImageClicked(e, props, post.imageUrl)}>
          <img className="gallery__image" src={post.imageUrl} />
        </a>
      }) 
    }
  </div>
}

const renderPinnedImage = (props) => {
  return props.isImagePinned && 
  <div className='gallery__pinned-image' onClick={props.imageClosed}>
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