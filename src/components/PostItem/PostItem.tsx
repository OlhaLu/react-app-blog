import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "styled-components";
import PostsListActions from "../../redux/postsOperations";

interface ItemProps {
  title: string;
  body: string;
  id: number;
}

interface PostItemProps {
  item: ItemProps;
  fetchRemoveItem: (id: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({
  item: { title, body, id },
  fetchRemoveItem
}) => {
  const deleteItem = () => fetchRemoveItem(id);

  return (
    <Item>
      <Link to={`/posts/${id}`}></Link>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Button onClick={deleteItem}>Remove</Button>
    </Item>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchRemoveItem: (value: any) =>
    dispatch(PostsListActions.fetchRemoveItem(value))
});

export default connect(null, mapDispatchToProps)(PostItem);

const Item = style.div`
border: #ECECEC 3px solid;`;

const Title = style.h2`
  text-transform: uppercase;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  letter-spacing: 1px;
  width: 100%;
  color: #465457;`;

const Body = style.h3`
  color: #191970;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  `;

const Button = style.button`
    background:  #ADD8E6;
    font-size: 14px;
		border-radius: 15px;
		padding: 10px 20px;
		display: block;
		font-family: arial;
		font-weight: bold;
    color: #008B8B;
		text-decoration: none;
		text-shadow:0px 1px 0px #fff;
		border:1px solid #a7a7a7;
		width: 145px;
		margin:0px auto;
		box-shadow: 0px 2px 1px white inset, 0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    -webkit-transition:box-shadow 0.5s;`;
