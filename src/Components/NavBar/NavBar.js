import React from "react";
import { NavLink } from "react-router-dom";
import { NavList, NavItem, Panel } from "./NavBar.styles";
import * as styles from "./NavBar.module.css";
import { MdSearch } from "react-icons/md";
import { ImHome } from "react-icons/im";

export default function NavBar() {
  return (
    <Panel>
      <NavList>
        <NavItem>
          <NavLink
            className={styles.navLinkStyle}
            activeClassName={styles.activeStyle}
            exact
            to="/"
          >
            <ImHome className={styles.iconStyle} />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={styles.navLinkStyle}
            activeClassName={styles.activeStyle}
            to="/cities"
          >
            <MdSearch className={styles.iconStyle} />
            Search
          </NavLink>
        </NavItem>
      </NavList>
    </Panel>
  );
}
