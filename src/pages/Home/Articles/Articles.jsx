import Slider from "react-slick";
import css from "./Articles.module.scss";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Articles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={css.section}>
      <div className={css.container}>
        <SectionAnimationWrapper>
          <h2 className={css.heading}>مقالات وتوجيهات تربوية ومهنية</h2>
        </SectionAnimationWrapper>
        <div className={css.list_wrapper}>
          <SectionAnimationWrapper>
            <Slider {...settings}>
              <div className={css.item}>
                <div className={css.date_wrapper}>
                  <p className={css.date}>06 أوت</p>
                </div>
                <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
                <p className={css.content}>
                  أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
                </p>
              </div>

              <div className={css.item}>
                <div className={css.date_wrapper}>
                  <p className={css.date}>06 أوت</p>
                </div>
                <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
                <p className={css.content}>
                  أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
                </p>
              </div>

              <div className={css.item}>
                <div className={css.date_wrapper}>
                  <p className={css.date}>06 أوت</p>
                </div>
                <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
                <p className={css.content}>
                  أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
                </p>
              </div>

              <div className={css.item}>
                <div className={css.date_wrapper}>
                  <p className={css.date}>06 أوت</p>
                </div>
                <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
                <p className={css.content}>
                  أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
                </p>
              </div>
            </Slider>
          </SectionAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Articles;