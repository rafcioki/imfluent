import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import api from 'reddit-images-api';

function* fetchImages(action) {
  const images = yield call(api, action.subreddit);
  yield put({ type: 'RECEIVED_IMAGES', images });
}

export default function* watchFetchImages() {
  yield takeEvery('START_LOADING_IMAGES', fetchImages);
}