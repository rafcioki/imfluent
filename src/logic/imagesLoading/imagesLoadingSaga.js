import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getPosts } from 'reddit-images-api';
import { loadImages, loadMoreImages } from './imagesLoadingActions';

function* fetchImages(action) {
  try {
    const state = yield select()

    const response = yield call(getPosts, state.images.subreddit, state.images.from, state.images.orderBy)
  
    yield put({
      type: 'RECEIVED_IMAGES',
      images: response.posts,
      lastPostId: response.lastPostId,
      nextCount: response.nextCount
    });
  } catch (ex) {
    console.error(ex)
  }
}

function* fetchMoreImages(action) {
  try {
    const state = yield select();

    const response = yield call(getPosts, state.images.subreddit, state.images.from, state.images.orderBy, state.images.lastPostId, state.nextCount);

    yield put({
      type: 'RECEIVED_IMAGES',
      images: response.posts,
      lastPostId: response.lastPostId,
      nextCount: response.nextCount
    });
  } catch (ex) {
    console.error(ex)
  }
}

function* triggerNewSearchIfImagesAreAlreadyLoaded(action) {
  const state = yield select()

  if (state.images.images.length > 0) {
    yield put(loadImages())
  }
}

function* triggerLoadingImagesIfArentAlreadyLoading(action) {
  const state = yield select() 

  if (!state.images.isLoading) {
    yield put(loadMoreImages())
  }
}

function* triggerLoadingMoreImagesIfArentAlreadyLoading(action) {
  const state = yield select() 

  if (!state.images.isLoading) {
    yield put(loadMoreImages())
  }
}

export function* watchRequestImages() {
  yield takeLatest('REQUEST_IMAGES', triggerLoadingImagesIfArentAlreadyLoading);
}

export function* watchRequestMoreImages() {
  yield takeLatest('REQUEST_MORE_IMAGES', triggerLoadingImagesIfArentAlreadyLoading);
}

export function* watchLoadImages() {
  yield takeLatest('LOAD_IMAGES', fetchImages)
}

export function* watchLoadMoreImages() {
  yield takeLatest('LOAD_MORE_IMAGES', fetchMoreImages)
}

export function* watchOrderByFilterSet() {
  yield takeLatest('SET_ORDERBY_FILTER', triggerNewSearchIfImagesAreAlreadyLoaded)
}

export function* watchFromFilterSet() {
  yield takeLatest('SET_FROM_FILTER', triggerNewSearchIfImagesAreAlreadyLoaded);
}