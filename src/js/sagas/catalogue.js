import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_CATALOGUES } from "constants/actionTypes";
import { fetchCataloguesSuccess } from "actions/catalouge";
import fetch from "util/fetch";
import * as URL from "constants/urls";

export function* fetchCatalogues() {
  const { response, error } = yield call(fetch, {
    url: URL.CATALOGUES,
    method: "get"
  });
  const catalogues = response.data;
  yield put(fetchCataloguesSuccess(catalogues));
}

export default function* catalogueSaga() {
  yield takeEvery(FETCH_CATALOGUES, fetchCatalogues);
}
