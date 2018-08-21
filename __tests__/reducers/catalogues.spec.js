import reducer from "reducers/catalouges";
import { fetchCatalogues, fetchCataloguesSuccess } from "actions/catalouge";

describe("Catalogues reducer", () => {
  const initialState = { catalogueList: [], isLoading: false };

  it("should give initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_CATALOGUES_SUCCESS", () => {
    const dummyCatalogue = {
      id: "dummyId",
      name: "dummyName",
      description: "dummyDescription"
    };
    const action = fetchCataloguesSuccess([dummyCatalogue]);
    expect(reducer(initialState, action)).toEqual({ ...initialState, catalogueList: [dummyCatalogue] });
  });

  it("should handle FETCH_CATALOGUES", () => {
    expect(reducer(initialState, fetchCatalogues())).toEqual({ ...initialState, isLoading: true });
  });
});
