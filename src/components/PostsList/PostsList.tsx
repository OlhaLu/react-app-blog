import React from "react";
import { connect } from "react-redux";
import PostItem from "../PostItem";
import selector from "../../redux/postsSelectors";
import style from "styled-components";

interface ItemPostsProps {
  id: number;
  title: string;
  body: string;
}

interface PostsListProps {
  items: [ItemPostsProps];
}

const PostsList: React.FC<PostsListProps> = ({ items }) => {
  return (
    <Items>
      {items
        ? items.map(item => <PostItem key={item.id} item={item} />)
        : "Loading..."}
    </Items>
  );
};

const mapStateToProps = (state: any) => ({
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
