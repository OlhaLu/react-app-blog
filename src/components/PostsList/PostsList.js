import React from "react";
import PostItem from "../PostItem";
import PostsListActions from "../../redux/postsActions";

// import "./PostsList.css";

const PostsList = ({ items, onRemove }) => {
  console.log(PostsListActions);

  return (
    <div className="post-items">
      {items
        ? items.map(post => <PostItem {...post} onRemove={onRemove} />)
        : "Loading..."}
    </div>
  );
};

export default PostsList;
