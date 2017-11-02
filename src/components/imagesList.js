import React from 'react';

const renderLoadingIndicator = () => {
  return "Currently loading!";
}

const renderImages = (images) => {
  return images.map(image => {
    return <img src={image} />
  });
}

const ImagesList = (props) => {
  return (
    <div>
      { props.isLoading ? renderLoadingIndicator() : renderImages(props.images) }
    </div>  
  );
};

export default ImagesList;