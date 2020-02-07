import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

//worker Saga: will perform the async increment task
export function* incrementAsync() {
        yield delay(1000)
        yield put({type: 'INCREMENT'}) //forward INCREMENT_ASYNC call to INCREMENT reducer action  
        console.log('Using Saga to increment the counter')
}

// watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC action
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
    yield delay(0)
    console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(), 
        watchIncrementAsync()
    ])
}