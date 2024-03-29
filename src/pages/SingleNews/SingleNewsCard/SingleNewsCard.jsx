import { Link } from "react-router-dom";
import css from "./SingleNewsCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const SingleNewsCard = ({
  img,
  meta1 = "meta1",
  meta2 = "meta2",
  meta3 = "meta3",
  title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet voluptatem dolorum",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo ullam ex repudiandae, in iusto veniam nobis, voluptate asperiores illum neque! Praesentium ea blanditiis sit? Facere alias facilis distinctio itaque, eveniet deserunt cum mollitia recusandae quo quam repudiandae similique assumenda perferendis. Temporibus libero ad odit quis quia obcaecati impedit magnam eius distinctio, incidunt, id est nam porro dolore commodi sequi? Beatae quisquam quo ut aperiam eos, magni autem deserunt similique nulla doloribus fugiat nisi saepe consectetur amet facere error, vero eaque quasi ipsam quos iusto natus? Voluptates, placeat aspernatur pariatur labore voluptatum, officia neque eum accusamus similique quo repellendus fugit quis quia corporis, aliquam nobis quibusdam. Libero tenetur perspiciatis non soluta alias ipsum sequi iusto dolor? A necessitatibus modi eaque reiciendis exercitationem porro ad vel provident qui. Libero esse sapiente, natus ad recusandae, neque corporis sunt aut quam labore ducimus, temporibus iste! Facilis esse impedit, eum vel illum placeat earum eaque odit ipsam beatae incidunt laudantium ad omnis ut veritatis possimus, nam fugit repellendus magni unde sed! Reiciendis iste sunt voluptatibus labore ut error sapiente provident dolorem, quos eum ea reprehenderit doloremque exercitationem mollitia odio aspernatur hic suscipit eos eaque modi corporis! Quam reprehenderit quibusdam explicabo reiciendis perferendis itaque! Voluptate.",
  keyword1 = "منصات1",
  keyword2 = "منصات2",
  keyword3 = "منصات3",
  author_name = "author name",
  author_about = "about the author, some descr",
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={css.news_card}>
        <SectionAnimationWrapper>
          {img && (
            <div className={css.news_image_wrapper}>
              <img className={css.news_image} src={img} alt="" />
            </div>
          )}
        </SectionAnimationWrapper>
        <SectionAnimationWrapper>
          <div className={css.news_content_wrapper}>
            <ul className={css.meta_list}>
              <li className={css.meta_item}>
                <div className={css.meta_icon_wrapper}>
                  <svg className={css.meta_icon}>
                    <use href={icons + "#user"}></use>
                  </svg>
                  <p className={css.meta_info}>{meta3}</p>
                </div>
              </li>
              <li className={css.meta_item}>
                <div className={css.meta_icon_wrapper}>
                  <svg className={css.meta_icon}>
                    <use href={icons + "#chat"}></use>
                  </svg>
                  <p className={css.meta_info}>{meta2}</p>
                </div>
              </li>

              <li className={css.meta_item}>
                <div className={css.meta_icon_wrapper}>
                  <svg className={css.meta_icon}>
                    <use href={icons + "#calendar"}></use>
                  </svg>
                  <p className={css.meta_info}>{meta1}</p>
                </div>
              </li>
            </ul>
            <h2 className={css.title}>{title}</h2>
            <div className={css.content}>{content}</div>
            <div className={css.additional}>
              <div className={css.keywords_wrapper}>
                <p className={css.keywords_header}>
                  {t("news.single_news_keywords")}
                </p>
                <ul className={css.keywords_list}>
                  <li className={css.keywords_item}>{keyword1}</li>
                  <li className={css.keywords_item}>{keyword2}</li>
                  <li className={css.keywords_item}>{keyword3}</li>
                </ul>
              </div>
              <ul className={css.socials}>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={css.social_link}
                  >
                    <svg className={css.icon}>
                      <use href={icons + "#facebook"}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={css.social_link}
                  >
                    <svg className={css.icon}>
                      <use href={icons + "#instagram"}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={css.social_link}
                  >
                    <svg className={css.icon}>
                      <use href={icons + "#pinterest"}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={css.social_link}
                  >
                    <svg className={css.icon}>
                      <use href={icons + "#twitter"}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SectionAnimationWrapper>
      </div>

      <SectionAnimationWrapper>
        <div className={css.autor_card}>
          <div className={css.autor_image_wrapper}>
            <div className={css.image_container}>
              {img ? (
                <img className={css.autor_image} src={img} alt="" />
              ) : (
                <svg className={css.user_icon}>
                  <use href={icons + "#user"}></use>
                </svg>
              )}
            </div>
            <h5 className={css.author_name}>{author_name}</h5>
            <ul className={css.author_socials}>
              <li className={css.author_socials_item}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.author_social_link}
                >
                  <svg className={css.author_icon}>
                    <use href={icons + "#facebook"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.author_socials_item}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.author_social_link}
                >
                  <svg className={css.author_icon}>
                    <use href={icons + "#instagram"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.author_socials_item}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.author_social_link}
                >
                  <svg className={css.author_icon}>
                    <use href={icons + "#pinterest"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.author_socials_item}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.author_social_link}
                >
                  <svg className={css.author_icon}>
                    <use href={icons + "#twitter"}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.autor_content_wrapper}>
            <p className={css.autor_descr}>{author_about}</p>
            <Link className={css.autor_button}>
              {t("news.single_news_card_all_articles")}
            </Link>
          </div>
        </div>
      </SectionAnimationWrapper>
    </div>
  );
};

export default SingleNewsCard;
