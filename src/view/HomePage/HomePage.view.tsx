import React from "react";
import Image from "next/image";
import classes from "./HomePage.module.scss";
import photo from "@/assets/images/sprinters.jpg";
import Link from "next/link";

type Props = {};

const HomePageView = (props: Props) => {
  return (
    <div className={classes["main-section"]}>
      <div className={classes["header"]}>
        <div className={classes["overflow"]}>
          <div className={classes["color"]}></div>
          <div className={classes["info"]}>
            <div className={classes["name-number"]}>
              <div className={classes["name"]}>
                <p className={classes["head-name"]}>Rus-Trans</p>
                <p className={classes["sub-name"]}>Грузо-Пассажирские Перевозки</p>
                <p className={classes["sub-name-text"]}>Франция - Россия <br /> ( Париж, Ницца, Канны, Монако, Монте Карло )</p>
                <p className={classes["sub-name-text"]}>Италия - Россия <br />( Сан Ремо, Милан, Рим )</p>
              </div>
              <div className={classes["number"]}>
                <p className={classes["name"]}>Руслан Коман</p>
                <p className={classes["number"]}>[Франция] +33 7 53 03 35 35</p>
              </div>
            </div>
            <div className={classes["button-text"]}>
              <p className={classes["header-text"]}>Быстро и комфортно</p>
              <p className={classes["sub-text"]}>Доступно каждому</p>
              <Link href={"/info"} className={classes["link"]}>
                <button>Информация</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
