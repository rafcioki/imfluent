import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getPosts } from 'reddit-images-api';
import { fetchImages } from './imagesLoadingActions';

function* loadImages(action) {
  const state = yield select()
  
  const response = yield call(getPosts, state.images.subreddit, state.images.from, state.images.orderBy)
  
  yield put({
    type: 'RECEIVED_IMAGES',
    images: response.posts,
    lastPostId: response.lastPostId,
    nextCount: response.nextCount
  });
}

function* loadMoreImages(action) {
  const state = yield select();

  const response = yield call(getPosts, state.images.subreddit, state.images.from, state.images.orderBy, state.images.lastPostId, state.nextCount);

  yield put({
    type: 'RECEIVED_IMAGES',
    images: response.posts,
    lastPostId: response.lastPostId,
    nextCount: response.nextCount
  });
}

function* triggerNewSearchIfImagesAreAlreadyLoaded(action) {
  const state = yield select()

  if (state.images.images.length > 0) {
    yield put(fetchImages())
  }
}

export function* watchFetchImages() {
  yield takeLatest('START_LOADING_IMAGES', loadImages);
}

export function* watchFetchMoreImages() {
  yield takeLatest('LOAD_MORE_IMAGES', loadMoreImages);
}

export function* watchOrderByFilterSet() {
  yield takeLatest('SET_ORDERBY_FILTER', triggerNewSearchIfImagesAreAlreadyLoaded)
}

export function* watchFromFilterSet() {
  yield takeLatest('SET_FROM_FILTER', triggerNewSearchIfImagesAreAlreadyLoaded);
}