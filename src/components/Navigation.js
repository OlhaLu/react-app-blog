import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from "styled-components";

const Navigation = () => (
  <NavigationBar>
    <NavItems>
      <NavLink exact to={routes.MAIN_POST_PAGE}>
        Main post page
      </NavLink>
    </NavItems>
    <NavItems>
      <NavLink to={routes.CREATE_POST_PAGE}>Create New Post</NavLink>
    </NavItems>
  </NavigationBar>
);

export default Navigation;

const NavigationBar = style.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
`;

const NavItems = style.li`
display: block;
color: #000;
padding: 8px 16px;
text-decoration: none;
background-color: #f1f1f1;
color: white;

&:hover {
  background: #40a9ff;

`;
