import { FETCH_CATALOGUES, FETCH_CATALOGUES_SUCCESS } from "constants/actionTypes";
import actionCreator from "actions/helper";

export const fetchCatalogues = actionCreator(FETCH_CATALOGUES);

export const fetchCataloguesSuccess = actionCreator(FETCH_CATALOGUES_SUCCESS, "catalogues");
