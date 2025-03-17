import React from "react";

import classes from "../../Info.module.scss";

const GruzSection = () => {
  return (
    <div id="gruz" className={classes["info-block"]}>
      <p className={classes["title"]}>👛 СТОИМОСТЬ</p>
      <p>
        Посылки до 5 кг (включительно) = 50 EUR (даже если вы хотите отправить
        просто конверт, это все равно 50 EUR).{" "}
      </p>
      <p>Посылки свыше 5 кг оплачиваются по расчету 10 EUR за килограмм</p>
    </div>
  );
};

export default GruzSection;
