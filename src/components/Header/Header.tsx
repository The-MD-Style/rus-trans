import React from "react";

import classes from "./Header.module.scss";

type Props = {
  name: string;
};

const Header = (props: Props) => {
  return (
    <div className={classes["header-box"]}>
      <div className={classes["overflow"]}>
        <div className={classes["color"]}></div>
        <div className={classes["info"]}>{props.name}</div>
      </div>
    </div>
  );
};

export default Header;
