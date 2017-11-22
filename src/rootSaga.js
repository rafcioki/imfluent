import { watchFetchImages, watchFetchMoreImages } from './logic/imagesLoading/imagesLoadingSaga'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchFetchImages(),
    watchFetchMoreImages()
  ])
}