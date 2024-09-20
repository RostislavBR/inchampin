import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

const AboutContentVideoText: FC = (): ReactElement => {
  return (
    <div className={styles.about_video_text_wrapper}>
      <p className={styles.text}>видео о проекте</p>
      <span>1:25 минут</span>
    </div>
  );
};

export default AboutContentVideoText;
