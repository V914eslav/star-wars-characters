import React from "react";

import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import PropTypes from "prop-types";
import styles from "./PersonPhoto.module.css";
const PersonPhoto = ({ personPhoto, personName, personId }) => {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(
      setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
  };
  const remove = () => {
    dispatch(removePersonFromFavorite(personId));
  };
  return (
    <>
      <div className={styles.container}>
        <img src={personPhoto} alt={personName} className={styles.photo} />
      </div>
      <button onClick={set}>Добавить в избранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
};

export default PersonPhoto;
