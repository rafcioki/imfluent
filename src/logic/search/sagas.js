import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* fetchImages() {
  yield delay(2000);
  yield put({ type: 'RECEIVED_IMAGES', images: ['https://i.ytimg.com/vi/URrngesxRa8/maxresdefault.jpg'] })
}

export default function* watchFetchImages() {
  yield takeEvery('START_LOADING_IMAGES', fetchImages);
}