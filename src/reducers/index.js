import { combineReducers } from "redux";

import postsReducer from "./post/postsReducer";
import commentReducer from "./comments/commentReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentReducer,
});

export default rootReducer;
