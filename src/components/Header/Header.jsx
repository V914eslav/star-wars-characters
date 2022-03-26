import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import Favorite from "@components/Favorite";

import imgDroid from "./img/droid.svg";
import imgLightSaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgSpaceStation);
        break;
      case THEME_DARK:
        setIcon(imgLightSaber);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);

  return (
    <div className={styles.contianer}>
      <img src={icon} alt="Star Wars" className={styles.logo} />

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
        <li className={styles.list__item}>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
