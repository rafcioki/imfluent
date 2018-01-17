const initialState = {
  isImagePinned: false
};

export default function GalleryReducer(state = initialState, action) {
  switch (action.type) {
    case 'PIN_IMAGE':
      return {
        ...state,
        isImagePinned: true,
        pinnedImageUrl: action.imageUrl
      }

    case 'UNPIN_IMAGE':
      return {
        ...state,
        isImagePinned: false,
        pinnedImageUrl: null
      }
  }

  return state;
}