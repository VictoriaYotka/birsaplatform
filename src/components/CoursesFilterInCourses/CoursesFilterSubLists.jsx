import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "@react-spring/web";

const PrimaryList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul data-sublist="sublist" className={css.sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.first_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.second_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.third_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.fourth_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.fifth_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.primary.sixth_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const MiddleTunisianList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul data-sublist="sublist" className={css.sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_tunisian.seventh_year_essential")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_tunisian.eighth_year_essential")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_tunisian.ninth_year_essential")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const MiddleLibyanList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul data-sublist="sublist" className={css.sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_libyan.first_year_preparatory")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_libyan.second_year_preparatory")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.middle_libyan.third_year_preparatory")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const HighSecondYearTunisianSubList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.sub_sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.second_year_etiquette")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.high_tunisian.second_year_informational")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.high_tunisian.second_year_experimental_science")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.second_year_economics")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const HighSecondYearLibyanSubList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.sub_sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_libyan.second_year_scientific")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_libyan.second_year_literary")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const HighThirdYearTunisianSubList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.sub_sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.third_year_etiquette")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.third_year_sports")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.high_tunisian.third_year_experimental_science")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.third_year_economics")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.high_tunisian.third_year_informational")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.high_tunisian.third_year_mathematics")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_tunisian.third_year_technical")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const HighThirdYearLibyanSubList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.sub_sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_libyan.third_year_scientific")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high_libyan.third_year_literary")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

const HighList = ({ style, toggleSubList, activeSubList }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState(activeSubList);

  useEffect(() => {
    setActive(activeSubList);
  }, [activeSubList]);

  const transition = useTransition(active, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: {
      opacity: 0,
      transform: "translateY(-20px)",
      config: { duration: 200 },
    },
  });

  return (
    <animated.ul data-sublist="sublist" className={css.sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high.first_year")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>

      {/* second year */}
      <li className={css.sub_item} onClick={() => toggleSubList("second_year")}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high.second_year")}</span>
          <svg
            className={
              activeSubList.includes("second_year")
                ? `${css.sub_icon_content} ${css.icon_active}`
                : `${css.sub_icon_content}`
            }
          >
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>

        {transition((style, active) => {
          switch (active.includes("second_year")) {
            case true:
              switch (location.pathname) {
                case "/courses-tunisian":
                  return <HighSecondYearTunisianSubList style={style} />;
                case "/courses-libyan":
                  return <HighSecondYearLibyanSubList style={style} />;
                default:
                  return null;
              }
            default:
              return null;
          }
        })}
      </li>

      {/* third year */}
      <li className={css.sub_item} onClick={() => toggleSubList("third_year")}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.high.third_year")}</span>
          <svg
            className={
              activeSubList.includes("third_year")
                ? `${css.sub_icon_content} ${css.icon_active}`
                : `${css.sub_icon_content}`
            }
          >
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>

        {transition((style, active) => {
          switch (active.includes("third_year")) {
            case true:
              switch (location.pathname) {
                case "/courses-tunisian":
                  return <HighThirdYearTunisianSubList style={style} />;
                case "/courses-libyan":
                  return <HighThirdYearLibyanSubList style={style} />;
                default:
                  return null;
              }
            default:
              return null;
          }
        })}
      </li>
    </animated.ul>
  );
};

const BachelorList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul data-sublist="sublist" className={css.sub_list} style={style}>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.bachelor_tunisian.arts")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.bachelor_tunisian.technical")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.bachelor_tunisian.mathematics")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.bachelor_tunisian.experimental_science")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>{t("courses_filter.bachelor_tunisian.media")}</span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
      <li className={css.sub_item}>
        <p className={css.sub_item_heading}>
          <span>
            {t("courses_filter.bachelor_tunisian.economics_management")}
          </span>
          <svg className={css.sub_icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
        </p>
      </li>
    </animated.ul>
  );
};

export {
  PrimaryList,
  MiddleTunisianList,
  MiddleLibyanList,
  HighList,
  BachelorList,
};
