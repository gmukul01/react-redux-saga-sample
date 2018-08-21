import { FETCH_CATALOGUES_SUCCESS, FETCH_CATALOGUES } from "constants/actionTypes";
import createReducer from "reducers/helper";

const initialState = {
  catalogueList: [],
  isLoading: false
};
const addCatalogues = (state, { catalogues }) => ({
  ...state,
  isLoading: false,
  catalogueList: [...state.catalogueList, ...catalogues.map(({ id, name, description }) => ({ id, name, description }))]
});

const setLoading = state => ({
  ...state,
  isLoading: true
});

const catalogues = createReducer(initialState, {
  [FETCH_CATALOGUES_SUCCESS]: addCatalogues,
  [FETCH_CATALOGUES]: setLoading
});

export default catalogues;
