import React from "react";
import classes from "./Footer.module.scss";
import { contacts } from "@/view/Contact/Contact.map";
import Link from "next/link";
import VIcon from "@/components/VIcon/VIcon";

type Props = {};

const FooterView = (props: Props) => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footerWrapper"]}>
        <div className={classes["contacts"]}>
          <p className={classes["page-name"]}>Контакты</p>
          <div className={classes["contacts"]}>
            <p className={classes["element"]}>[Имя] Руслан Коман</p>
            <p className={classes["element"]}>🇫🇷 [Франция] +33 7 53 03 35 35</p>
            <p className={classes["element"]}>🇷🇺 [Россия] +79 1 69 99 84 27</p>
            <p className={classes["element"]}>rustrans@gmail.com</p>
          </div>
        </div>
        <div className={classes["social"]}>
          <p className={classes["social-head"]}>Меня можно найти в:</p>
          <ul>
            {contacts.map((item) => (
              <li key={item.link + "footer"}>
                <Link href={item.link}>
                  <VIcon
                    color={item.color}
                    name={item.icon}
                    height={35}
                  ></VIcon>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
