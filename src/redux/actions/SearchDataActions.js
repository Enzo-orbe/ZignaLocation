import {
  IS_FETCHING_SEARCH_DATA,
  FETCHING_SEARCH_DATA_FAILURE,
  SEARCH_DATA_FETCHED,
} from "./SearchDataConstants";
import { getDataMap } from "../../utils/Services";

export const fetchDataFailure = () => {
  return {
    type: FETCHING_SEARCH_DATA_FAILURE,
  };
};

export const fetchingData = () => {
  return {
    type: IS_FETCHING_SEARCH_DATA,
  };
};

export const saveDataFetched = (res) => {
  return {
    type: SEARCH_DATA_FETCHED,
    result: res,
  };
};

export const asyncFetchData = (searchText) => {
  return (dispatch) => {
    dispatch(fetchingData());
    getDataMap(searchText)
      .then((data) => dispatch(saveDataFetched(data)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};
