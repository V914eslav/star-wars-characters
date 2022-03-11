import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import icon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";
const Favorite = () => {
  const [count, setCount] = useState();
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const countLength = Object.keys(storeData).length;
    countLength.toString().length > 2 ? setCount("...") : setCount(countLength);
  });
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img src={icon} alt="Favorites" className={styles.icon} />
      </Link>
    </div>
  );
};

export default Favorite;
