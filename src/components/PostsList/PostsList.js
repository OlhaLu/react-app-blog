import React from "react";
import { connect } from "react-redux";
import PostItem from "../PostItem";
import selector from "../../redux/postsSelectors";
import style from "styled-components";

const PostsList = ({ items, onRemove }) => {
  return (
    <Items>
      {items
        ? items.map(item => (
            <PostItem key={item.id} item={item} onRemove={onRemove} />
          ))
        : "Loading..."}
    </Items>
  );
};

const mapStateToProps = state => ({
  items: selector.getAllPosts(state)
});

export default connect(mapStateToProps)(PostsList);

const Items = style.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 40px 20px;
  border-bottom: 2px solid rgba(0,0,0,.05); 
  text-align: center;
`;
