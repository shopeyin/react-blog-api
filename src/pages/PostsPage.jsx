import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Post } from "../components/Post";

import fetchPosts from "../reducers/post/postsAction";
function PostsPage({ dispatch, loading, posts, hasErrors }) {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <div>
      <h1>Posts</h1>
      {renderPosts()}
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(PostsPage);
