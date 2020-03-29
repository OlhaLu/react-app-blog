import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from "styled-components";

const Navigation: React.FC = () => (
  <NavBlock>
    <NavigationBar>
      <NavItems>
        <NavLink
          exact
          to={routes.MAIN_POST_PAGE}
          style={{ textDecoration: "none" }}
        >
          <NavTitle>Main post page</NavTitle>
        </NavLink>
      </NavItems>
      <NavItems>
        <NavLink
          to={routes.CREATE_POST_PAGE}
          style={{ textDecoration: "none" }}
        >
          <NavTitle>Create New Post</NavTitle>
        </NavLink>
      </NavItems>
    </NavigationBar>
  </NavBlock>
);

export default Navigation;

const NavBlock = style.div`
background-color: #ADD8E6;
`;

const NavigationBar = style.ul`
  margin: 0;
  padding: 0;
  width: 200px;
  padding: 8px 16px;
`;

const NavItems = style.li`e;
display:inline-block;
color: white;

&:hover {
background: #87CEEB;
`;

const NavTitle = style.h4`
color: #191970;
text-transform: uppercase;
`;
