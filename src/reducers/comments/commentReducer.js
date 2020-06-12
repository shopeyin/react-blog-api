import {
  GET_COMMENT,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from "./commentType";

export const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: action.payload,
      };
    default:
      return state;
  }
}
