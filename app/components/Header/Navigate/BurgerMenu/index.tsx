import { FC, ReactElement, memo, useRef } from "react";
import { BurgerMenuItem, BurgerMenuProps } from "@interfaces/Burger";
import BurgerList from "@components/Header/Navigate/BurgerMenu/BurgerList";
import BurgerItem from "@components/Header/Navigate/BurgerMenu/BurgerItem";
import SvgLogo from "@components/Header/SvgLogo";
import CloseButton from "@components/common/CloseButton";
import styles from "./styles.module.scss";

const BurgerMenu: FC<BurgerMenuProps> = memo(
  ({ items, status, onClose }): ReactElement | null => {
    const burgerMenuRef = useRef<HTMLDivElement>(null);

    if (!status && !burgerMenuRef.current?.classList.contains(styles.active)) {
      return null;
    }

    const renderBurgerItems = (items: BurgerMenuItem[]): ReactElement[] => {
      return items.map(({ id, name }: BurgerMenuItem): ReactElement => {
        return <BurgerItem id={id} name={name} key={id} />;
      });
    };

    return (
      <div
        ref={burgerMenuRef}
        className={`${styles.burger} ${status ? styles.active : styles.inactive}`}
      >
        <CloseButton onClose={onClose} />
        <nav aria-label={"Меню"} className={styles.nav}>
          <BurgerList>{items && renderBurgerItems(items)}</BurgerList>
        </nav>

        <SvgLogo />
      </div>
    );
  },
);

BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;
