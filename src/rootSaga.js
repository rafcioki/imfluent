import { watchRequestImages,
          watchRequestMoreImages,
          watchLoadImages,
          watchLoadMoreImages,
          watchOrderByFilterSet,
          watchFromFilterSet  } from './logic/imagesLoading/imagesLoadingSaga'
import { watchMovePinnedImageLeft, watchMovePinnedImageRight } from './logic/gallery/gallerySaga'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchRequestImages(),
    watchRequestMoreImages(),
    watchLoadImages(),
    watchLoadMoreImages(),
    watchOrderByFilterSet(),
    watchFromFilterSet(),
    watchMovePinnedImageLeft(),
    watchMovePinnedImageRight()
  ])
}