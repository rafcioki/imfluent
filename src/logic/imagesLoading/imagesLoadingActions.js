export const imagesReceived = (images) => {
  return {
    type: 'RECEIVED_IMAGES',
    images,
  };
}

export function requestImages() {
  return {
    type: 'REQUEST_IMAGES'
  }
}

export function requestMoreImages() {
  return {
    type: 'REQUEST_MORE_IMAGES'
  }
}

export function loadImages() {
  return {
    type: 'LOAD_IMAGES',
  }
}

export function loadMoreImages() {
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



