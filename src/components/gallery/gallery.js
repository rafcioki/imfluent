import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './gallery.css';

function handleImageClicked(event, props, imageUrl) {
  props.imageClicked(imageUrl);
  event.preventDefault();
}

function handleExternalLinkClicked(event, permalink) {
  window.open('https://reddit.com' + permalink, '_blank')
  event.preventDefault()
  event.stopPropagation()
}

const renderLoadingIndicator = () => {
  return (
    <div className="gallery__loading-indicator">
      <FontAwesome name='spinner' className="gallery__loading-indicator__spinner fa-spin" />
    </div>
  );
}

const renderImages = (props) => {
  return <div className='gallery__images'>
   {
      props.posts.map(post => {
        return <div className="gallery__image-box">
          <a href={post.imageUrl} onClick={(e) => handleImageClicked(e, props, post.imageUrl)}>
            <div className="gallery__image-box__picture">
              <img className="gallery__image-box__picture" src={post.imageUrl} />
              <FontAwesome name="external-link" className="gallery__image-box__external-link" onClick={(e) => handleExternalLinkClicked(e, post.permalink)} />
            </div>
            
            <div className="gallery__image-box__caption">
              <span>[{post.score}]</span>
              {post.title}
            </div>
          </a>
        </div>
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
        { props.isLoading && props.posts.length === 0 ? renderLoadingIndicator() : renderImages(props) }
      </div>,
      renderPinnedImage(props)
    ];
};

export default Gallery;