import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_CATALOGUES } from "constants/actionTypes";
import { fetchCataloguesSuccess } from "actions/catalouge";
import fetch from "util/fetch";
import * as URL from "constants/urls";
import catalogueSaga, { fetchCatalogues } from "sagas/catalogue";

describe("Catalogue saga tests", () => {
  const response = {
    data: "dummyResponseData"
  };

  it("should listen FETCH_CATALOGUES", () => {
    const gen = catalogueSaga();
    expect(gen.next().value).toEqual(takeEvery(FETCH_CATALOGUES, fetchCatalogues));
  });

  it("should dispatch fetchCataloguesSuccess action", () => {
    const gen = fetchCatalogues();
    expect(gen.next().value).toEqual(
      call(fetch, {
        url: URL.CATALOGUES,
        method: "get"
      })
    );
    expect(gen.next({ response }).value).toEqual(put(fetchCataloguesSuccess("dummyResponseData")));
  });
});
