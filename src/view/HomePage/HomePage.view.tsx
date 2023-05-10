"use client";
import React from "react";
import classes from "./HomePage.module.scss";
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
                <p className={classes["sub-name"]}>
                  <br /> Грузо-Пассажирские Перевозки <br />
                </p>
                <p className={classes["sub-name-text"]}>
                  🇫🇷 <strong>Франция - Россия</strong> 🇷🇺 ( Москва ) <br />
                  <i>( Париж, Ницца, Канны, Монако, Монте Карло )</i>
                </p>
                <p className={classes["sub-name-text"]}>
                  🇮🇹 <strong>Италия - Россия</strong> 🇷🇺 ( Москва ) <br />
                  <i>( Сан Ремо, Милан, Рим )</i>
                </p>
                <p className={classes["sub-name-text"]}>
                  🇩🇪 <strong>Германия - Россия</strong> 🇷🇺 ( Москва ) <br />
                  <i>( Мюнхен, Дрезден, Берлин )</i>
                </p>
              </div>
              <div className={classes["number"]}>
                <p className={classes["name"]}>Руслан Коман</p>
                <br />
                <p className={classes["number"]}>[Франция] +33 7 53 03 35 35</p>
                <p className={classes["number"]}>[Россия] +79 1 69 99 84 27</p>
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
