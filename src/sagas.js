import { put, takeEvery, all, call, select} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
 
export {delay};

export function* helloSaga() {
    yield console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' })
  }

export function* log() {

  yield takeEvery('INCREMENT', function* log(action) {

      const state = yield select()
      console.log('action', action)
      console.log('state', state)

  });

}
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    log(),
    watchIncrementAsync()
  ])
}