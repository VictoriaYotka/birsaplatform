import { Link } from "react-router-dom";
import css from "./CourseCardInCategories.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const CourseCardInCategories = ({
  notion,
  img,
  imgAlt,
  preheader,
  header,
  rating,
  descr,
  id,
}) => {
  const { t } = useTranslation();

  return (
    <div className={css.item}>
      <div className={css.img_thumb}>
        <p className={css.notion}>{notion}</p>
        {img ? (
          <img src={img} alt={imgAlt} loading="lazy" className={css.image} />
        ) : (
          <svg className={css.placeholder_icon}>
            <use href={icons + "#placeholder"}></use>
          </svg>
        )}
      </div>
      <div className={css.info_thumb}>
        <h4 className={css.preheader}>{preheader}</h4>
        <h3 className={css.header}>{header}</h3>
        <div className={css.wrapper}>
          <p className={css.descr}>{descr}</p>
          <div className={css.rating}>{rating}</div>
        </div>
        <Link to="/courses/course" className={css.course_button}>
          <svg className={css.icon}>
            <use href={icons + "#play"}></use>
          </svg>
          <span>{t("categories.course_card_button")}</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCardInCategories;
