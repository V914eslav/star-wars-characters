import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./PersonPage.module.css";

const PersonPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1 className={styles.hhh}>{id}</h1>
    </>
  );
};

PersonPage.propTypes = {};

export default PersonPage;
