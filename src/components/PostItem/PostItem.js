import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

const PostItem = ({ item: { title, id }, onRemove }) => {
  const deleteItem = () => onRemove(id);

  return (
    <Item>
      <Link to={`/posts/${id}`}>
        <Title>{title}</Title>
      </Link>
      <Button onClick={deleteItem}>Remove</Button>
      <LinkComment>
        <Link to={`/posts/${id}?_embed=comments`}>edit comments</Link>
      </LinkComment>
    </Item>
  );
};

export default PostItem;

const Item = style.div`
border: #ECECEC 2px solid;`;

const Title = style.h2`
font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  letter-spacing: 1px;
  max-width: 500px;
  width: 100%;
  position: relative;
  display: inline-block;
  color: #465457;`;

const Button = style.button`
    background: #ECECEC;
    font-size: 14px;
		border-radius: 15px;
		padding: 10px 20px;
		display: block;
		font-family: arial;
		font-weight: bold;
    color: #40a9ff;
		text-decoration: none;
		text-shadow:0px 1px 0px #fff;
		border:1px solid #a7a7a7;
		width: 145px;
		margin:0px auto;
		box-shadow: 0px 2px 1px white inset, 0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    -webkit-transition:box-shadow 0.5s;`;

const LinkComment = style.p`
  font-size: 18px;
  color: red;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-decoration: none
  text-transform: uppercase;
    `;