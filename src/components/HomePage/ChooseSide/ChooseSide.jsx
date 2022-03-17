import React from "react";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

const ChooseSide = () => {
  const isTheme = useTheme();

  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
    </>
  );
};

ChooseSide.protoTypes = {
  //text: PropTypes.string
};
export default ChooseSide;
