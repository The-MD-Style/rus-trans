import React from "react";

import classes from "../../Info.module.scss";
import { tarife } from "../../Info.map";

const TarifeSection = () => {
  return (
    <div id="tarife" className={classes["info-block"]}>
      <p className={classes["title"]}>
        📁 ОТДЕЛЬНЫЕ ТАРИФЫ НА ДОКУМЕНТЫ И МЕБЕЛЬ
      </p>
      <ul className={classes["item-list"]}>
        {tarife.map((item, index: number) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <div className={`${classes["box"]} ${classes["padding"]}`}>
        <p className={classes["box-head"]}>
          КАК БУДЕТ ПРОИЗВЕДЕН РАСЧЕТ (НА ПРИМЕРАХ):
        </p>
        <br />
        <p className={classes["text"]}>
          Если вы хотите передать просто справки / дипломы / доверенности и
          ничего больше - 40 EUR, даже если таких документов будет несколько
          (речь об адекватном количестве, 2-3 справки - это НЕ тоже самое, что и
          100 справок).
        </p>
        <br />
        <p className={classes["text"]}>
          Если вы передаете посылку с вещами до 5 кг и вместе с ней еще
          доверенности / справки / дипломы и проч. по списку, то оплата будет 40
          EUR за посылку и еще 40 EUR за документ(ы). Итого: 80 EUR.
        </p>
        <br />
        <p className={classes["text"]}>
          Если к посылке (также до 5 кг) будет идти такой документ, как паспорт/
          права / рабочее удостоверение, то это будет 40 EUR за посылку и 80 EUR
          за документ. Итого: 120 EUR.
        </p>
      </div>
    </div>
  );
};

export default TarifeSection;
