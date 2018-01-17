const initialState = {
  isLoading: false,
  images: [],
  hiddenImages: [],
  subreddit: null,
  orderBy: 'top',
  from: 'all',
}

export default function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_IMAGES':
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
        nextCount: action.nextCount,
      }

    case 'RECEIVED_MORE_IMAGES':
      return {
        ...state,
        isLoading: false,
        hiddenImages: action.images,
        lastPostId: action.lastPostId,
        nextCount: action.nextCount,
      }

    case 'LOAD_MORE_IMAGES':
      return {
        ...state,
        isLoading: true,
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

    case 'DISPLAY_MORE_IMAGES':
      return {
        ...state,
        images: [ ...state.images, ...state.hiddenImages ],
        hiddenImages: []
      }

    default:
      return state;
  }
}
