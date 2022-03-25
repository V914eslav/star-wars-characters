import React from "react";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import PropTypes from "prop-types";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div onClick={() => isTheme.change(theme)} className={styles.item}>
      <div className={styles.item__header}>{text}</div>
      <img src={img} alt={text} className={styles.item__img} />
    </div>
  );
};
ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  return (
    <>
      <ChooseSideItem
        theme={THEME_LIGHT}
        text="Light Side"
        img={imgLightSide}
      />
      <ChooseSideItem theme={THEME_DARK} text="Dark Side" img={imgDarkSide} />
      <ChooseSideItem
        theme={THEME_NEITRAL}
        text="I'm Han Solo"
        img={imgFalcon}
      />
    </>
  );
};

export default ChooseSide;
