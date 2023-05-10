import React from "react";

import classes from "../../Info.module.scss";
import { ograniceno } from "../../Info.map";

const OgranicenoSection = () => {
  return (
    <div id="ograniceno" className={classes["info-block"]}>
      <p className={classes["listHead"]}>ОГРАНИЧЕНО</p>
      <ul className={classes["item-list"]}>
        {ograniceno.map((item, index: number) => (
          <li
            className={`${item.ignore ? classes["ignorelist"] : ""}`}
            key={index}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OgranicenoSection;
