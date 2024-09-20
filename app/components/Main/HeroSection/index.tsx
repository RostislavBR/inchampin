import { FC, ReactElement } from "react";
import HeroImage from "@components/Main/HeroSection/HeroImage";
import HeroContent from "@components/Main/HeroSection/HeroContent";
import styles from "./styles.module.scss";

const HeroSection: FC = (): ReactElement => {
  return (
    <section className={styles.hero_section}>
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
