import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";

import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import routesConfig from "../../routes/routesConfig";

// import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">Poeple</NavLink>
        {/* <Routes>
          {routesConfig.map((route, index) => {
            <Route
              key={index}
              path={route.path}
              element={route.element}
             
            />;
          })}
        </Routes> */}

        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/people" element={<PeoplePage exact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
