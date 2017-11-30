const initialState = {
  isLoading: false,
  images: [],
  subreddit: null,
  orderBy: 'top',
  from: 'all',
}

export default function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOADING_IMAGES':
      return {
        ...state,
        isLoading: true,
        images: [],
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
      
    case 'SET_ORDERBY_FILTER':
      return {
        ...state,
        orderBy: action.orderBy
      }

    case 'SET_FROM_FILTER':
      return {
        ...state,
        from: action.from
      }

    case 'SET_SEARCH_TERM':
      return {
        ...state,
        subreddit: action.subreddit
      }

    default:
      return state;
  }
}
