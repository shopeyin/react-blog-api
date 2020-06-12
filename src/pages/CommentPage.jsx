import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import fetchComments from "../reducers/comments/commentAction";
import Comments from "../components/Comments";

function CommentPage({ dispatch, loading, comments, hasErrors, match }) {
  const { id } = match.params;
  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch]);

  const renderComments = () => {
    if (loading) return <p>Loading comments...</p>;
    if (hasErrors) return <p>Unable to display comments.</p>;
    return comments.map((comment) => (
      <Comments key={comment.id} comment={comment} />
    ));
  };

  return (
    <div>
      <h1>Comments</h1>
      {renderComments()}
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.comments.loading,
  comments: state.comments.comments,
  hasErrors: state.comments.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(CommentPage);
