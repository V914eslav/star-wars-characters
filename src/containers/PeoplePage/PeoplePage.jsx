import React from "react";
import { useState, useEffect } from "react";

import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleIMage } from "../../services/getPeopleData";

// import styles from "./PeoplePage.module.css";
const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleIMage(id);
      console.log(img);
      return {
        id,
        name,
        img,
      };
    });
    setPeople(peopleList);
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, id, img }) => (
            <li key={id}>
              <img src={img} alt={name} className="img" />

              <p className="p">{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;
