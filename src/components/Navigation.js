import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from "styled-components";

const Navigation = () => (
  <NavBlock>
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
  </NavBlock>
);

export default Navigation;

const NavBlock = style.div`
background-color: #FFFFF0;
`;

const NavigationBar = style.ul`
 list-style-type: none;
 text-decoration: none;
  margin: 0;
  padding: 0;
  width: 200px;
`;

const NavItems = style.li`
display:inline-block;
color: #FFF0F5;
padding: 8px 16px;
color: white;

&:hover {
  background: #40a9ff;

`;
