import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";
import { API_PERSONE } from "@constants/api";
import PropTypes from "prop-types";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSONE}/${id}/`);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        // res.films
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <h1 className={styles.hhh}>{personName}</h1>
      {personInfo && (
        <ul>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title}>
                  <span>
                    {title}:{data}
                  </span>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
