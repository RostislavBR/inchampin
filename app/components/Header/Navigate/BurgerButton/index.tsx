import { FC, ReactElement, memo } from "react";
import { BurgerButtonProps } from "app/interfaces/Burger";
import styles from "./styles.module.scss";

const BurgerButton: FC<BurgerButtonProps> = memo(
  ({ onClick }): ReactElement => {
    return (
      <button className={styles.button} onClick={() => onClick()}>
        <span></span>
      </button>
    );
  },
);

BurgerButton.displayName = "BurgerButton";

export default BurgerButton;
