import React from "react";
import PropTypes from "prop-types";

import "../index.css";
import styles from "./UiButton.module.css";

const UiButton = ({ text, onClick, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default UiButton;
