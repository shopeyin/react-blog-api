import {
  GET_COMMENT,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from "./commentType";

export const getComment = () => ({
  type: GET_COMMENT,
});

export const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = (error) => ({
  type: GET_COMMENTS_FAILURE,
  payload: error,
});

function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getComment());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        // `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();

      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure(error));
    }
  };
}

export default fetchComments;
