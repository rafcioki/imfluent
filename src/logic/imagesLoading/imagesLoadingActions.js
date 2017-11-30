export const imagesReceived = (images) => {
  return {
    type: 'RECEIVED_IMAGES',
    images,
  };
}

export function fetchImages() {
  return {
    type: 'START_LOADING_IMAGES',
  }
}

export function fetchMoreImages() {
  return {
    type: 'LOAD_MORE_IMAGES',
  }
}

export function setOrderByFilter(orderBy) {
  return {
    type: 'SET_ORDERBY_FILTER',
    orderBy
  }
}

export function setFromFilter(from) {
  return {
    type: 'SET_FROM_FILTER',
    from
  }
}

export function setSearchTerm(subreddit) {
  return {
    type: 'SET_SEARCH_TERM',
    subreddit
  }
}



