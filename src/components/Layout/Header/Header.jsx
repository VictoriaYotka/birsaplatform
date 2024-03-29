import css from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import ContactsList from "./ContactsList/ContactsList";
import SocialsList from "../../SocialsList/SocialsList";
import SearchButton from "./SearchButton/SearchButton";
import SignList from "./SignList/SignList";
import NavList from "./NavList/NavList";
import Logo from "./Logo/Logo";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import toggleBodyScroll from "../../../utils/toggleBodyScroll";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isMediumScreen, setIsMediumScreen] = useState(
    document.body.offsetWidth >= 768
  );
  const [isLargeScreen, setIsLargeScreen] = useState(
    document.body.offsetWidth >= 992
  );

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    isOpenBurgerMenu ? toggleBodyScroll("visible") : toggleBodyScroll("clip");
  };

  const updateMedia = () => {
    setIsMediumScreen(document.body.offsetWidth >= 768);
    setIsLargeScreen(document.body.offsetWidth >= 992);
    if (isLargeScreen) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll("visible");
    }
  };

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#burger_menu") === null &&
      e.target.closest("#navigation") === null &&
      e.target.closest("#header_search_form") === null &&
      e.target.closest("#header_search_close") === null &&
      e.target.closest("#language_switcher") === null &&
      e.target.closest("#account_button") === null &&
      e.type === "click";
    const target = e.key === "Escape";

    if (backdrop || target) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    if (isOpenBurgerMenu) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  useEffect(() => {
    setIsOpenBurgerMenu(false);
  }, [location.pathname]);

  return (
    <header className={css.header}>
      {isLargeScreen && (
        <>
          <div className={css.topper}>
            <div className={css.topper_container}>
              <div className={css.wrapper}>
                <LanguageSwitcher />
                <Link to="/contact" className={css.socials_title}>
                  {t("sharedLayout.contact_us")}
                </Link>
                <ul className={css.socials_list}>
                  <SocialsList />
                </ul>
              </div>
              <ContactsList />
            </div>
          </div>

          <div className={css.content}>
            <div className={css.content_container}>
              <nav className={css.nav}>
                <Logo />
                <NavList />
              </nav>
              <SignList />
              <SearchButton />
            </div>
          </div>
        </>
      )}

      {!isLargeScreen && (
        <>
          <Logo />
          {isMediumScreen && (
            <>
              <NavList />
            </>
          )}
          <BurgerMenu
            toggleMenu={toggleMenu}
            isOpenBurgerMenu={isOpenBurgerMenu}
            isLargeScreen={isLargeScreen}
          />
        </>
      )}
    </header>
  );
};

export default Header;
