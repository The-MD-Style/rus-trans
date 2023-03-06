"use client";
import React, { useEffect, useState } from "react";
import classes from "./Info.module.scss";
import Header from "@/components/Header/Header";
import { ograniceno, tarife, zapretList, zapretListBox } from "./Info.map";
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

  const handleClickScroll = (item: string) => {
    const element = document.getElementById(item);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top - 50;

      if (typeof window !== "undefined") {
        window.scrollTo({
          left: 0,
          top: absoluteElementTop,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

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
          <p className={classes["menu-head"]}>Cодержание</p>
          <ul className={classes["info-menu"]}>
            {menu.map((item) => (
              <li key={item.id} onClick={() => handleClickScroll(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div id="gruz" className={classes["info-block"]}>
          <p className={classes["title"]}>👛 СТОИМОСТЬ</p>
          <p>
            Посылки до 5 кг (включительно) = 40 EUR (даже если вы хотите
            отправить просто конверт, это все равно 40 EUR).{" "}
          </p>
          <p>Посылки свыше 5 кг оплачиваются по расчету 8 EUR за килограмм</p>
        </div>

        <div
          id="posilca"
          className={`${classes["info-block"]} ${classes["gap"]}`}
        >
          <p className={classes["title"]}>{"👜 КАК УПАКОВАТЬ ПОСЫЛКУ?"}</p>
          <p className={classes["text"]}>
            <strong>
              ПОСЫЛКИ ПРИНИМАЮТСЯ ТОЛЬКО В СУМКАХ / ПАКЕТАХ НА МОЛНИИ. НЕ В
              КОРОБКАХ.
            </strong>
            {`В России такие сумки можно найти, например, в Fix Price, а в Европе
            - в магазинах Flying Tiger, IKEA и, конечно, на Amazon и проч. Часто
            спрашивают про стандартные вокзальные клетчатые сумки - они также
            подходят.`}
          </p>
          <p className={classes["text"]}>
            {`✅ В день сбора посылок вы отдаете водителю подготовленную вами сумку (посылку) и сообщаете: `}
          </p>
          <ul className={classes["pack"]}>
            <li>ваши контакты</li>
            <li>
              {
                "контакты получателя (его телефон, и, если требуется доп. отправка уже в стране назначения на другой адрес - например, в другой город - то адрес, индекс получателя и т. д.)"
              }
            </li>
          </ul>
          <p>
            Все вещи которые новые должны быть без этикеток 🏷️ и ценников ₽.{" "}
            <br />
            Обувь которая новая также без ценников 🏷️, чеков 🧾 и коробок 📦🎁.
          </p>
          <p className={classes["text"]}>
            ❌ На самой сумке ничего писать (от кого / кому и т. д.){" "}
            <span>НЕ</span> нужно. <br />
            Отвечаем на вопрос “почему?”: когда водитель получит от вас
            контактные данные, он присвоит вашей посылке внутренний номер. Этот
            номер вы и назовете получателю вашей посылки. Вы можете также
            дополнительно сфотографировать 📸 свою сумку и показать ее фото
            получателю - но это совсем не обязательно.
          </p>
          <p className={classes["text"]}>
            📩 Конверты рекомендуется <span>НЕ</span> запечатывать, так как
            таможенники часто вскрывают любые конверты / сумки / пакеты и проч.
          </p>
          <p className={classes["text"]}>
            ❗Если вы планируете передать ДОКУМЕНТЫ 📂, то внимательно читайте
            абзац ниже.
          </p>
        </div>

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
              (речь об адекватном количестве, 2-3 справки - это НЕ тоже самое,
              что и 100 справок).
            </p>
            <br />
            <p className={classes["text"]}>
              Если вы передаете посылку с вещами до 5 кг и вместе с ней еще
              доверенности / справки / дипломы и проч. по списку, то оплата
              будет 40 EUR за посылку и еще 40 EUR за документ(ы). Итого: 80
              EUR.
            </p>
            <br />
            <p className={classes["text"]}>
              Если к посылке (также до 5 кг) будет идти такой документ, как
              паспорт/ права / рабочее удостоверение, то это будет 40 EUR за
              посылку и 80 EUR за документ. Итого: 120 EUR.
            </p>
          </div>
        </div>

        <div id="zapret" className={classes["info-block"]}>
          <p className={classes["title"]}>
            ❌ ЗАПРЕЩЕНО / ОГРАНИЧЕНО К ПРОВОЗУ / ОТПРАВКЕ
          </p>
          <p className={classes["warnMess"]}>
            ОБЯЗАТЕЛЬНО ПРОЧТИТЕ ТЕКСТ НИЖЕ, ПЕРЕД ТЕМ, КАК СОБРАТЬ ПОСЫЛКУ:
          </p>
          <div className={classes["box"]}>
            <p className={classes["box-head"]}>
              ❗❗❗НА ТАМОЖНЕ РАБОТАЮТ ВЫСОКОТЕХНОЛОГИЧНЫЕ СКАНЕРЫ -{" "}
              <strong>
                СПРЯТАТЬ ЧТО-ЛИБО ОТ СОТРУДНИКОВ ТАМОЖНИ НЕВОЗМОЖНО❗❗❗
              </strong>
            </p>
            <p className={classes["text"]}>
              Если отправитель решит, несмотря ни на что, все же попытаться
              спрятать золото / деньги и проч. в местах, где, как он надеется,
              “точно не найдут” - последствия будут следующие:
            </p>
            <ul>
              {zapretListBox.map((item, index: number) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
          <p className={classes["listHead"]}>ЗАПРЕЩЕНО</p>
          <p className={classes["message"]}>
            (“запрещено” = это значит, что нельзя ни в каком количестве и ни в
            каком виде)
          </p>
          <ul className={classes["item-list"]}>
            {zapretList.map((item, index: number) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div id="ograniceno" className={classes["info-block"]}>
          <p className={classes["listHead"]}>ОГРАНИЧЕНО</p>
          <ul className={classes["item-list"]}>
            {ograniceno.map((item, index: number) => (
              <li
                className={`${item.ignore ? classes["ignorelist"] : ""}`}
                key={index}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
