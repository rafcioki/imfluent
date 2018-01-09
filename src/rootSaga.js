import { watchRequestImages, watchRequestMoreImages, watchLoadImages, watchLoadMoreImages, watchOrderByFilterSet, watchFromFilterSet  } from './logic/imagesLoading/imagesLoadingSaga'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchRequestImages(),
    watchRequestMoreImages(),
    watchLoadImages(),
    watchLoadMoreImages(),
    watchOrderByFilterSet(),
    watchFromFilterSet(),
  ])
}