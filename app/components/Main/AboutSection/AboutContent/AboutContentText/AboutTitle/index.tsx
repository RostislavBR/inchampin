import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

const AboutTitle: FC = (): ReactElement => {
  return (
    <div className={styles.about_title_wrapper}>
      <h2 className={styles.about_title}>
        уютное и безопасное
        <br />
        пространство для счастливой,
        <br />
        <span>
          спокойной и размеренной
          <br />
          жизни
        </span>
      </h2>
    </div>
  );
};

export default AboutTitle;
