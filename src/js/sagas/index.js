import { all } from "redux-saga/effects";
import catalogueSaga from "sagas/catalogue";

export default function* rootSaga() {
  yield all([catalogueSaga()]);
}
