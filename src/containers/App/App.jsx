import React from "react";
import cn from "classnames";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className="div"></div>
      <h1 className={cn(styles.header, styles.text)}>Hello</h1>
      <h2 className={`${styles.header} ${styles.text}`}>Hello 2</h2>
    </>
  );
};

export default App;
