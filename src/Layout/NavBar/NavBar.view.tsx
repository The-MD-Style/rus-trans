import React from "react";
import classes from "./NavBar.module.scss";
import Link from "next/link";

type Props = {};

const NavBarView = (props: Props) => {
  const navData = [
    { name: "Главная", link: "/" },
    { name: "Контакты", link: "/contacts" },
    { name: "Информация", link: "/info" },
  ];
  return (
    <div className={classes["nav"]}>
      <nav>
        <ul>
          {navData.map((item) => (
            <li key={item.name}>
              <Link className={classes["link"]} href={item.link}>
                {item.name}
              </Link>
              <div className={classes["line"]}></div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBarView;
