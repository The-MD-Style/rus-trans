import GruzSection from "./Sections/GruzSection/GruzSection";
import OgranicenoSection from "./Sections/OgranicenoSection/OgranicenoSection";
import PosilcaSection from "./Sections/PosilcaSection/PosilcaSection";
import TarifeSection from "./Sections/TarifeSection/TarifeSection";
import ZapretSection from "./Sections/ZapretSection/ZapretSection";

type SectionsDataType = {
  text: JSX.Element;
  ignore?: boolean;
};

type InfoSectionsType = {
  sectionName: string;
  section: () => JSX.Element;
};

export const InfoSections: InfoSectionsType[] = [
  {
    sectionName: "gruz",
    section: () => <GruzSection></GruzSection>,
  },
  {
    sectionName: "posilca",
    section: () => <PosilcaSection></PosilcaSection>,
  },
  {
    sectionName: "tarife",
    section: () => <TarifeSection></TarifeSection>,
  },
  {
    sectionName: "zapret",
    section: () => <ZapretSection></ZapretSection>,
  },
  {
    sectionName: "ograniceno",
    section: () => <OgranicenoSection></OgranicenoSection>,
  },
];

export const tarife: SectionsDataType[] = [
  {
    text: (
      <p>
        мебель = <strong>12 EUR за 1 кг</strong>
      </p>
    ),
  },
  {
    text: (
      <p>
        паспорта, водительские удостоверения (“права”), различные рабочие
        удостоверения = <strong>80 EUR за один документ</strong> (❗передаются
        строго в руки перевозчику - не убираются в конверт / сумку с вашей
        посылкой и проч.)
      </p>
    ),
  },
  {
    text: (
      <p>
        все остальные документы, такие как нотариальные доверенности,
        свидетельства о рождении, дипломы, справки = <strong>40 EUR</strong>
      </p>
    ),
  },
];

export const zapretListBox: SectionsDataType[] = [
  {
    text: (
      <p>
        <strong>
          Сканер покажет сотруднику таможни, что и где “спрятано”.
        </strong>
        Это неизбежно. Там не старое советское оборудование, а новейшие сканеры.
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>Товар конфискуют на таможне.</strong> Ваш адресат не получит
        его. Как показывает практика, вытащить его с таможни удается не всем - и
        уж тем более не быстро. Закладывайте месяцы на борьбу с таможней за
        возврат вашего “тайника”.
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>Машину снимут с очереди,</strong> в которой она добросовестно
        отстояла 1-2-3 дня и из-за вас пострадает не только перевозчик, но и все
        пассажиры, а также все люди, чьи посылки будут находиться в данный
        момент в автомобиле.{" "}
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>Машина придет на несколько суток (!!!) позже</strong>{" "}
        запланированного срока. Пассажиры вынуждены будут из-за вас “жить” в
        этой очереди N-ное количество суток повторно.
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>Пожизненный “бан” со стороны перевозчика:</strong> ни
        отправитель, ни получатель больше никогда больше не смогут
        воспользоваться услугами перевозчика.
      </p>
    ),
  },
];

export const zapretList: SectionsDataType[] = [
  {
    text: (
      <p>
        <strong>💊 лекарства</strong> (любые таблетки и вообще любая
        фармацевтика - как рецептурная, так и не рецептурная),а также
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>запрещено</strong> медицинская и массажная фурнитура.
      </p>
    ),
  },
  {
    text: <strong>💪 БАДы / спортивное питание</strong>,
  },
  {
    text: (
      <p>
        <strong>🪴 цветы / корни / семена</strong>все, что “растет из земли” в
        любом виде <strong>чай / кофе</strong> (сразу поясняем, почему: к
        сожалению, сотрудники таможни в последнее время любят “предполагать”,
        что это может быть на самом деле мapихуaна или другие запрещенные
        вещества)
      </p>
    ),
  },
  {
    text: <strong>🍷 алкоголь</strong>,
  },
  {
    text: (
      <p>
        <strong>🚬 никотин</strong> - как обычные <strong>сигареты</strong>, так{" "}
        <strong>стики для ICOS / myGlo (и др. бренды)</strong>
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong> 🧀 скоропортящаяся еда (паштеты / сыры </strong> и проч. -
        поскольку КРАЙНЕ высока вероятность того, что еда испортится за
        несколько суток пребывания в машине и ваши продукты не только доедут
        несъедобными, но и могут тем самым сильно испортить поездку другим
        пассажирам
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>💍 ювелирные изделия</strong> (золото / серебро / любой
        материал) / <strong>бижутерия</strong>
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>📚 антиквариат</strong> (любой предмет -{" "}
        <strong>старые книги / иконы</strong> и т. д.)
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>📚 книги про оружие / терроризм</strong> и других схожих тематик
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>🖼️ предметы искусства (картины / скульптуры / статуэтки</strong>{" "}
        и проч.);
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>🐾 лекарства для животных / еда для животных</strong>
      </p>
    ),
  },
  {
    text: (
      <p>
        <strong>🐕 домашних животных без хозяина</strong> (можно только с
        хозяином - когда он едет как пассажир).
      </p>
    ),
  },
];

export const ograniceno: SectionsDataType[] = [
  {
    text: (
      <p>
        🧴 <span>парфюм</span> - адекватное количество (например, 1 шт. на 1
        чел.)
      </p>
    ),
  },
  {
    text: (
      <p>
        💄 <span>косметика</span> - идентично парфюму (см. выше)
      </p>
    ),
  },
  {
    text: (
      <p>
        🍪 <span>не скоропортящаяся еда</span> (обязательно прочтите информацию
        ниже)
      </p>
    ),
  },
  {
    text: (
      <p>
        ❗ перед отправкой обязательно сообщите водителю, какую конкретно еду вы
        собираетесь отправить
      </p>
    ),
    ignore: true,
  },
  {
    text: (
      <p>
        <strong>
          ❗любую еду вы отправляете на свой собственный “страх и риск”
        </strong>{" "}
        (это означает, что если еда все же испортится за время поездки, то
        перевозчик НЕ будет нести за это никакую ответственность)
      </p>
    ),
    ignore: true,
  },
];
