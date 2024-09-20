import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

const HeroTitle: FC = (): ReactElement => {
  return (
    <div className={styles.hero_content_title_wrapper}>
      <h2 className={styles.hero_content_title}>
        Дом бизнес-класса
        <br />
        для ценителей роскоши
      </h2>
    </div>
  );
};

export default HeroTitle;
