import { FC, ReactElement } from "react";
import { BurgerListProps } from "@interfaces/Burger";
import styles from "./styles.module.scss";

const BurgerList: FC<BurgerListProps> = ({ children }): ReactElement => {
  return <ul className={styles.list}>{children}</ul>;
};

export default BurgerList;
