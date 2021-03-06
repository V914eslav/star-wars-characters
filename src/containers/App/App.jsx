import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "@components/Header";
import routesConfig from "@routes/routesConfig";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
