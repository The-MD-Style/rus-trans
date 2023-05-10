"use client";

import React, { useEffect, useState } from "react";
import classes from "./Info.module.scss";
import Header from "@/components/Header/Header";
import {
  InfoSections,
  ograniceno,
  tarife,
  zapretList,
  zapretListBox,
} from "./Info.map";
import VIcon from "@/components/VIcon/VIcon";

type Props = {};

const InfoView = (props: Props) => {
  const menu = [
    {
      name: "СТОИМОСТЬ",
      id: "gruz",
    },
    {
      name: "КАК УПАКОВАТЬ ПОСЫЛКУ?",
      id: "posilca",
    },
    {
      name: "ОТДЕЛЬНЫЕ ТАРИФЫ НА ДОКУМЕНТЫ И МЕБЕЛЬ",
      id: "tarife",
    },
    {
      name: "ЗАПРЕЩЕНО",
      id: "zapret",
    },
    {
      name: "ОГРАНИЧЕНО",
      id: "ograniceno",
    },
  ];
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisible);
      }
    };
  });
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (item: string) => {
    setSection((prev) => item);
  };

  const [section, setSection] = useState("gruz");

  return (
    <section className={classes["info"]}>
      <Header name={"Информация"}></Header>
      <button
        className={classes["goback"]}
        onClick={scrollToTop}
        style={{ opacity: visible ? 1 : 0 }}
      >
        <VIcon className={classes["icon"]} name={"upArrow"}></VIcon>
      </button>
      <div className={classes["sections"]}>
        <div className={classes["menu"]}>
          <p className={classes["menu-head"]}>
            Cодержание <br />
            <span className={classes["click"]}>
              ( нажмите на интересующий раздел )
            </span>
          </p>
          <ul className={classes["info-menu"]}>
            {menu.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === section ? classes["activeMenu"] : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {InfoSections.map(
          (item) => item.sectionName === section && item.section()
        )}
      </div>
    </section>
  );
};

export default InfoView;
