import React from "react";
import { useSelector } from "react-redux";

// import styles from "./FavotitesPage.module.css";
const FavotitesPage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);

  console.log(storeData);
  return <div>FavotitesPage</div>;
};

export default FavotitesPage;