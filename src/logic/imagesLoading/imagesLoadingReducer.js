const initialState = {
  isLoading: false,
  images: [],
  subreddit: null
}

export default function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOADING_IMAGES':
      return {
        ...state,
        isLoading: true,
        subreddit: action.subreddit
      };

    case 'RECEIVED_IMAGES':
      return {
        ...state,
        isLoading: false,
        images: [...state.images, ...action.images],
        lastPostId: action.lastPostId,
        nextCount: action.nextCount
      }

    case 'LOAD_MORE_IMAGES':
      return {
        ...state
      }

    default:
      return state;
  }
}
