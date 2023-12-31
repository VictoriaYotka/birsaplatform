import { Link } from "react-router-dom";
import css from "./CourseCardInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const CourseCardInCourses = ({
  course_image,
  title,
  category,
  admin,
  admin_image,
  hours,
  downloaded,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <li className={css.item}>
      <SectionAnimationWrapper>
        <div className={css.img_thumb}>
          {course_image ? (
            <img className={css.image} src={course_image} alt={title} />
          ) : (
            <svg className={css.placeholder_icon}>
              <use href={icons + "#placeholder"}></use>
            </svg>
          )}
          <button className={css.favorite_button}>
            <svg className={css.icon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
        </div>
        <div className={css.wrapper}>
          <Link className={css.category}>{category}</Link>
          <div className={css.admin_wrapper}>
            <Link className={css.admin}>
              <div className={css.admin_image_thumb}>
                {admin_image ? (
                  <img
                    className={css.admin_image}
                    src={admin_image}
                    alt={admin}
                  />
                ) : (
                  <svg className={css.placeholder_user_icon}>
                    <use href={icons + "#user"}></use>
                  </svg>
                )}
              </div>
              by {admin}
            </Link>
          </div>
          <h2 className={css.title}>
            <Link>{title}</Link>
          </h2>

          <div className={css.meta}>
            <p className={css.descr}> {description}</p>
            <div className={css.downloaded_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#downloaded"}></use>
              </svg>
              <span className={css.downloaded}>{downloaded}</span>
            </div>
            <div className={css.hours_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#clock"}></use>
              </svg>
              <span>{hours}</span>
            </div>
          </div>
          <Link to="/courses/course" className={css.button}>
            {t("courses.course_card_button")}
          </Link>
        </div>
      </SectionAnimationWrapper>
    </li>
  );
};

export default CourseCardInCourses;
