export const imagesReceived = (images) => {
  return {
    type: 'RECEIVED_IMAGES',
    images
  };
}

export function fetchImages(subreddit, lastLoadedImageId) {
  return {
    type: 'START_LOADING_IMAGES',
    subreddit
  }
}

export function fetchMoreImages() {
  return {
    type: 'LOAD_MORE_IMAGES'
  }
}



