import css from "./CourseCard.module.scss";
import { Link } from "react-router-dom";

const CourseCard = ({
  notion,
  img,
  imgAlt,
  preheader,
  header,
  rating,
  descr,
  id,
}) => {
  return (
    <div className={css.item}>
      <div className={css.img_thumb}>
        <p className={css.notion}>{notion}</p>
        <img src={img} alt={imgAlt} loading="lazy" className={css.image} />
      </div>
      <div className={css.info_thumb}>
        <h4 className={css.preheader}>{preheader}</h4>
        <h3 className={css.header}>{header}</h3>
        <div className={css.wrapper}>
          <div className={css.rating}>{rating}</div>
          <p className={css.descr}>{descr}</p>
        </div>
        <Link to={id} className={css.course_button}>
          Go to course <span className={css.glyph}> &#9664;</span>
          {/* opposite side: &#9654; */}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
