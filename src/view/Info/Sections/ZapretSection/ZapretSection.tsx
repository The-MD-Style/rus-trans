import React from "react";

import classes from "../../Info.module.scss";
import { zapretList, zapretListBox } from "../../Info.map";

const ZapretSection = () => {
  return (
    <div id="zapret" className={classes["info-block"]}>
      <p className={classes["title"]}>
        ❌ ЗАПРЕЩЕНО / ОГРАНИЧЕНО К ПРОВОЗУ / ОТПРАВКЕ
      </p>
      <p className={classes["warnMess"]}>
        ОБЯЗАТЕЛЬНО ПРОЧТИТЕ ТЕКСТ НИЖЕ, ПЕРЕД ТЕМ, КАК СОБРАТЬ ПОСЫЛКУ:
      </p>
      <div className={classes["box"]}>
        <p className={classes["box-head"]}>
          НА ТАМОЖНЕ РАБОТАЮТ ВЫСОКОТЕХНОЛОГИЧНЫЕ СКАНЕРЫ <br />
          <strong>
          ❗❗❗ СПРЯТАТЬ ЧТО-ЛИБО ОТ СОТРУДНИКОВ ТАМОЖНИ НЕВОЗМОЖНО❗❗❗
          </strong>
        </p>
        <p className={classes["text"]}>
          Если отправитель решит, несмотря ни на что, все же попытаться спрятать
          золото / деньги и проч. в местах, где, как он надеется, “точно не
          найдут” - последствия будут следующие:
        </p>
        <ul>
          {zapretListBox.map((item, index: number) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
      <p className={classes["listHead"]}>ЗАПРЕЩЕНО</p>
      <p className={classes["message"]}>
        (“запрещено” = это значит, что нельзя ни в каком количестве и ни в каком
        виде)
      </p>
      <ul className={classes["item-list"]}>
        {zapretList.map((item, index: number) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ZapretSection;
