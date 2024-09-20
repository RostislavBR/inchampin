import { FC, ReactElement } from "react";
import { BurgerMenuItem } from "@interfaces/Burger";
import styles from "./styles.module.scss";

const BurgerItem: FC<BurgerMenuItem> = ({ id, name }): ReactElement => {
  return (
    <li id={id.toString()} key={id} className={styles.item}>
      <span>{name}</span>
    </li>
  );
};

export default BurgerItem;
