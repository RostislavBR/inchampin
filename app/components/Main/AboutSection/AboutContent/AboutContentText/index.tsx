import { FC, ReactElement } from "react";
import AboutTitle from "@components/Main/AboutSection/AboutContent/AboutContentText/AboutTitle";
import AboutText from "@components/Main/AboutSection/AboutContent/AboutContentText/AboutText";
import styles from "./styles.module.scss";

interface AboutContentTextProps {
  visible: boolean;
}

const AboutContentText: FC<AboutContentTextProps> = ({
  visible,
}): ReactElement => {
  return (
    <div
      className={`${styles.about_content_text_wrapper} ${visible ? styles.text_visible : ""}`}
    >
      <AboutTitle />
      <AboutText />
    </div>
  );
};

export default AboutContentText;
