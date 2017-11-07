export const imageClosed = () => {
  return {
    type: 'IMAGE_CLOSED'
  }
}

export const imageClicked = (imageUrl) => {
  return {
    type: 'IMAGE_CLICKED',
    imageUrl
  }
}