import React from 'react';
import styles from './imagesList.css';

const renderLoadingIndicator = () => {
  return "Currently loading!";
}

const renderImages = (images) => {
  return images.map(image => {
    return <img src={image} className='images-list__image' />
  });
}

const ImagesList = (props) => {
  return (
    <div className='images-list'>
      { props.isLoading ? renderLoadingIndicator() : renderImages(props.images) }
    </div>  
  );
};

export default ImagesList;