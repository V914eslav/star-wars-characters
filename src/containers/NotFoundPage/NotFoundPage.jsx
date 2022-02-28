import React from "react";
import { useLocation } from "react-router-dom";
import img from "./img/not-found.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img src={img} alt="Not Found" className={styles.img} />
      <p className={styles.text}>
        Not match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
