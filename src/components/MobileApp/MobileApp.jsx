import { NavLink } from "react-router-dom";
import css from "./MobileApp.module.scss";

const MobileApp = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.video_group_wrapper}>
          <div className={css.video_wrapper}>
            <iframe
              className={css.video}
              title="mobile app video demonstration"
              src="https://www.youtube.com/embed/JfJYHfrOGgQ"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <p className={css.video_descr}>
            تطبيقنا متوفر على الهاتف و الأجهزة الوحية
          </p>
        </div>
        <div className={css.info_wrapper}>
          <h2 className={css.heading}>تطبيق منصة بيرسا التعليمية</h2>
          <p className={css.descr}>
            نحاول أن نسهل عملية التعليم عبر تطبيق بيرسا للأجهزةالمحمولة. قم
            بتنزيل تطبيق بيرسا المناسب لهاتفك الذكي أو جهــــــــازك اللوحي،
            ستجد نفس البيئة التعليمية الممتعة تنتقل معك أينما كنت تحديث تطبيق
            منصة بيرسا التعليمية تتم بشكل آلي بدون إزعاجك.
          </p>
          <NavLink className={css.button}>حمّل التطبيق الآن</NavLink>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
