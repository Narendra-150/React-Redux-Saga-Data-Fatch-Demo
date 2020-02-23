import { put, takeLatest, all } from "redux-saga/effects";
function* fetchData() {
  const json = yield fetch("http://localhost:4000/db").then(response =>
    response.json()
  );
  yield put({ type: "DATA_RECEIVED", json: json });
}
function* actionWatcher() {
  yield takeLatest("GET_DATA", fetchData);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
