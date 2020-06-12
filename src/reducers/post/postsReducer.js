import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "./postsType";

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: action.payload,
      };
    default:
      return state;
  }
}
