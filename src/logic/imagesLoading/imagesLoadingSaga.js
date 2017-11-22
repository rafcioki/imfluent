import { delay } from 'redux-saga';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getPosts } from 'reddit-images-api';

function* fetchImages(action) {
  const response = yield call(getPosts, action.subreddit);
  
  yield put({
    type: 'RECEIVED_IMAGES',
    images: response.posts,
    lastPostId: response.lastPostId,
    nextCount: response.nextCount
  });
}

function* fetchMoreImages(action) {
  const state = yield select();

  const response = yield call(getPosts, state.images.subreddit, state.images.lastPostId, state.nextCount);

  yield put({
    type: 'RECEIVED_IMAGES',
    images: response.posts,
    lastPostId: response.lastPostId,
    nextCount: response.nextCount
  });
}

export function* watchFetchImages() {
  yield takeLatest('START_LOADING_IMAGES', fetchImages);
}

export function* watchFetchMoreImages() {
  yield takeLatest('LOAD_MORE_IMAGES', fetchMoreImages);
}