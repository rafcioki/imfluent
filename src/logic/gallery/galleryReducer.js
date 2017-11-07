const initialState = {
  isImagePinned: false
};

export default function GalleryReducer(state = initialState, action) {
  switch (action.type) {
    case 'IMAGE_CLICKED':
      return {
        ...state,
        isImagePinned: true,
        pinnedImageUrl: action.imageUrl
      }

    case 'IMAGE_CLOSED':
      return {
        ...state,
        isImagePinned: false,
        pinnedImageUrl: null
      }
  }

  return state;
}