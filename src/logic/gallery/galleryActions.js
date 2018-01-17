export const unpinImage = () => {
  return {
    type: 'UNPIN_IMAGE'
  }
}

export const pinImage = (imageUrl) => {
  return {
    type: 'PIN_IMAGE',
    imageUrl
  }
}

export const movePinnedImageLeft = () => {
  return {
    type: 'MOVE_PINNED_IMAGE_LEFT',
  }
}

export const movePinnedImageRight = () => {
  return {
    type: 'MOVE_PINNED_IMAGE_RIGHT',
  }
}