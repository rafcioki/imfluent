import { put, takeLatest, select } from 'redux-saga/effects'
import { findIndex } from 'underscore'
import { movePinnedImageLeft, movePinnedImageRight, pinImage } from './galleryActions'
import { requestMoreImages } from '../imagesLoading/imagesLoadingActions'

function* getIndexOfCurrentlyPinnedImage() {
  const state = yield select()
  const images = [...state.images.images, ...state.images.hiddenImages]
  const currentlyPinnedImageUrl = state.gallery.pinnedImageUrl

  return findIndex(images, img => img.imageUrl === currentlyPinnedImageUrl)
}

function* moveImageLeft(action) {
  const state = yield select()
  const index = yield getIndexOfCurrentlyPinnedImage()
  const images = state.images.images

  if (index > 0) {
    yield put(pinImage(images[index - 1].imageUrl))
  }
}

function* moveImageRight(action) {
  const state = yield select()
  const index = yield getIndexOfCurrentlyPinnedImage()
  const images = [...state.images.images, ...state.images.hiddenImages]
  const hiddenImages = state.images.hiddenImages

  if (index < images.length - 1) {
    yield put(pinImage(images[index + 1].imageUrl))
  } else {
    yield put(requestMoreImages())
  }
}

export function* watchMovePinnedImageLeft() {
  yield takeLatest('MOVE_PINNED_IMAGE_LEFT', moveImageLeft)
}

export function* watchMovePinnedImageRight() {
  yield takeLatest('MOVE_PINNED_IMAGE_RIGHT', moveImageRight)
}