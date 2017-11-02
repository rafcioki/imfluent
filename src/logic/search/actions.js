export function imagesStartedLoading() {
  alert('triggered loading!');
  return {
    type: 'STARTED_LOADING_IMAGES',
    isLoading: true
  };
}

export const imagesReceived = (images) => {
  return {
    type: 'RECEIVED_IMAGES',
    images
  };
}

export function fetchImages(subreddit) {
  return (dispatch) => {
    dispatch(imagesStartedLoading());
  
    setTimeout(() => {
      dispatch(imagesReceived(['https://i.ytimg.com/vi/URrngesxRa8/maxresdefault.jpg']));
    }, 2000);
  }
}



