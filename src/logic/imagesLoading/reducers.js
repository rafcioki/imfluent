const initialState = {
  isLoading: false,
  images: []
}

export default function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'STARTED_LOADING_IMAGES':
      return {
        ...state,
        isLoading: true
      };

    case 'RECEIVED_IMAGES':
      return {
        ...state,
        isLoading: false,
        images: action.images
      }

    default:
      return state;
  }
}
