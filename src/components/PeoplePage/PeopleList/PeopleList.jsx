import React from "react";

import styles from "./PeopleList.module.css";
const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ name, id, img }) => (
          <li className={styles.list__item} key={id}>
            <a href="#">
              <img className={styles.persone__photo} src={img} alt={name} />

              <p className="p">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PeopleList;
