import { Link } from "react-router-dom";
import css from "./ArticleCard.module.scss";

const ArticleCard = ({ date, name, content }) => {
  return (
    <div className={css.item}>
      <Link to="/news/news" className={css.link}>
        <div className={css.image_thumb}>
          <img
            className={css.image}
            src="https://images.pexels.com/photos/19733182/pexels-photo-19733182/free-photo-of-a-large-group-of-tall-buildings-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={css.date_wrapper}>
          <p className={css.date}>{date}</p>
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.content}>{content}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
