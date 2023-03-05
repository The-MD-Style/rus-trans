import React from "react";

import SectionContainer from "@/containers/SectionContainer/SectionContainer";

import classes from "./Contact.module.scss";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { contacts } from "./Contact.map";
import VIcon from "@/components/VIcon/VIcon";

type Props = {};

const ContactView = (props: Props) => {
  return (
    <section className={classes["info"]}>
      <Header name={"Контакты"}></Header>
      <div className={classes["sections"]}>
        <div className={classes["info-wrapper"]}>
          <div>
            <p className={classes["page-name"]}>Контакты</p>
            <div className={classes["contacts"]}>
              <p className={classes["name"]}>[Имя] Руслан Коман</p>
              <p className={classes["number"]}>[Франция] +33 7 53 03 35 35</p>
              <p className={classes["mail"]}>rustrans@gmail.com</p>
            </div>
            <p className={classes["page-name"]}>Реквизиты:</p>
            <div className={classes["contacts"]}>
              <p className={classes["name"]}>🇪🇺 СЧЕТ В ЕВРО</p>
              <p className={classes["name"]}>
                Имя владельца счета: Ruslan Coman
              </p>
              <p className={classes["number"]}>BIC код: TRWIBEB1XXX</p>
              <p className={classes["number"]}>IBAN: BE86 9674 4768 2850 </p>
              <p className={classes["mail"]}>
                Адрес Wise: Avenue Louise 54, Room S52
              </p>
              <p className={classes["mail"]}>Brussels 1050 Belgium</p>
            </div>
          </div>

          <div className={classes["social"]}>
            <p className={classes["social-head"]}>Меня можно найти в:</p>
            <ul>
              {contacts.map((item) => (
                <li key={item.link}>
                  <Link href={""}>
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
    </section>
  );
};

export default ContactView;
