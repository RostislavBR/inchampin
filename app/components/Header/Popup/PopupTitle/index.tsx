import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

const PopupTitle: FC = (): ReactElement => {
  return (
    <div className={styles.popup_title_wrapper}>
      <h2 className={styles.popup_title}>Заказать звонок</h2>
    </div>
  );
};

export default PopupTitle;
