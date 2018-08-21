import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import Catalogues from "containers/Catalogues";
import { fetchCatalogues } from "actions/catalouge";

const mockStore = configureMockStore();
describe("Catalogues Container", () => {
  let wrapper, store;
  const initialState = {
    catalogues: {
      catalogueList: ["NVSS", "SUMSS"]
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Catalogues store={store} />);
  });

  it("should map props from state", () => {
    expect(wrapper.prop("catalogues")).toBe(initialState.catalogues.catalogueList);
  });

  it("should dispatch fetchCatalogues action", () => {
    wrapper.prop("fetchCatalogues")();
    const actions = store.getActions();
    expect(actions).toEqual([fetchCatalogues()]);
  });
});
