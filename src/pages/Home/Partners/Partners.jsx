import css from "./Partners.module.scss";
import acces_canada from "../../../assets/images/home/acces_canada.webp";
import british_counsil from "../../../assets/images/home/british_counsil.webp";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Partners = () => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>شراكاتنا</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={css.link}
              >
                <img
                  src={acces_canada}
                  alt=""
                  loading="lazy"
                  className={css.image}
                />
              </a>
            </li>
            <li className={css.item}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={css.link}
              >
                <img
                  src={british_counsil}
                  alt=""
                  loading="lazy"
                  className={css.image}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default Partners;