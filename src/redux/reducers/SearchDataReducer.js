import {
  IS_FETCHING_SEARCH_DATA,
  FETCHING_SEARCH_DATA_FAILURE,
  SEARCH_DATA_FETCHED,
} from "../actions/SearchDataConstants";

const initialState = {
  data: null,
  isFetching: false,
  error: false,
};

const SearchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_SEARCH_DATA: {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    }
    case SEARCH_DATA_FETCHED: {
      return {
        ...state,
        data: action.result?.features,
        isFetching: false,
      };
    }
    case FETCHING_SEARCH_DATA_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default SearchDataReducer;

export const getDataSearchReducer = (state) => state;

export const listData = (state) => getDataSearchReducer(state).data;
export const isFetching = (state) => getDataSearchReducer(state).isFetching;
export const error = (state) => getDataSearchReducer(state).error;
