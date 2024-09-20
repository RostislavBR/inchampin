"use client";

import { FC, ReactElement, useCallback, useState } from "react";
import BurgerButton from "@components/Header/Navigate/BurgerButton";
import BurgerMenu from "@components/Header/Navigate/BurgerMenu";
import SvgLogo from "@components/Header/SvgLogo";
import HeaderSelect from "@components/Header/HeaderSelect";
import Communication from "@components/Header/Communication";
import PhoneButton from "@components/Header/Communication/PhoneButton";
import BlurLayout from "@components/Header/Navigate/BurgerMenu/BlurLayout";
import BurgerMenuItems from "@constants/Burger";
import SelectOptions from "@constants/SelectOptions";
import Popup from "@components/Header/Popup";
import styles from "./styles.module.scss";

const Header: FC = (): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClickShowBurger = useCallback(() => {
    if (!isActive) {
      setShouldRenderMenu(true);
      setTimeout(() => setIsActive(true), 50);
    }
  }, [isActive]);

  const handleClickHideBurger = useCallback(() => {
    if (isActive) {
      setIsActive(false);
      setTimeout(() => setShouldRenderMenu(false), 500);
    }
  }, [isActive]);

  const handleClickShowPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClickClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_menu_wrapper}>
          <BurgerButton onClick={handleClickShowBurger} />
          <span className={styles.header_menu_text}>меню</span>
        </div>
        <HeaderSelect items={SelectOptions.items} />
        <SvgLogo />
        <PhoneButton onClick={handleClickShowPopup} />
        <Communication onClick={handleClickShowPopup} />
      </div>

      {shouldRenderMenu && (
        <BurgerMenu
          status={isActive}
          items={BurgerMenuItems.items}
          onClose={handleClickHideBurger}
        />
      )}

      <BlurLayout status={isActive} />

      <Popup visible={showPopup} onClose={handleClickClosePopup} />
    </header>
  );
};

export default Header;
