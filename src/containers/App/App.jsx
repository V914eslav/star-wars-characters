import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import PeoplePage from "@containers/PeoplePage";
// import HomePage from "@containers/HomePage";
import Header from "@components/Header";
import routesConfig from "@routes/routesConfig";

// import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
