import React from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.contianer}>
      <ul className={styles.list__contianer}>
        <li className={styles.list__item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/people/?page=1">Poeple</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
