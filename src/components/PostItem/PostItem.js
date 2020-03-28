import React from "react";
import { Link } from "react-router-dom";

// import "./PostItem.css";

const PostItem = ({ title, createdAt, _id, onRemove }) => (
  <div className="post-item">
    <Link to={`/posts/${_id}`}>
      <h2>{title}</h2>
    </Link>
    <p>
      <i>Posted on {createdAt}</i>
      <link onClick={onRemove.bind(this, _id)}>Remove</link>
      <Link to={`/posts/${_id}?_embed=comments`}>Edit</Link>
    </p>
  </div>
);

export default PostItem;
