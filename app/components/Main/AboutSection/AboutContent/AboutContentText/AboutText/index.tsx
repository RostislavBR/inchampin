import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

const AboutText: FC = (): ReactElement => {
  return (
    <div className={styles.about_text_wrapper}>
      <p className={styles.about_text}>
        <span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span>
        <br />
        балконами, лоджиями и террасами В собственной
        <br />
        ЗАКРЫТОЙ охраняемой территориИ.
      </p>
    </div>
  );
};

export default AboutText;
