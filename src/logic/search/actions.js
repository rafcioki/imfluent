export const imagesReceived = (images) => {
  return {
    type: 'RECEIVED_IMAGES',
    images
  };
}

export function fetchImages(subreddit) {
  return {
    type: 'START_LOADING_IMAGES',
    subreddit
  }
}



