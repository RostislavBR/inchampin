import { FC, ReactElement } from "react";
import AboutImage from "@components/Main/AboutSection/AboutImage";
import AboutContent from "@components/Main/AboutSection/AboutContent";
import styles from "./styles.module.scss";

const AboutSection: FC = (): ReactElement => {
  return (
    <section className={styles.about_section}>
      <AboutImage />
      <AboutContent />
    </section>
  );
};

export default AboutSection;
