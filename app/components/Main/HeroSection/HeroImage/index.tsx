import { FC, ReactElement } from "react";
import NextImage from "next/image";
import styles from "./styles.module.scss";

const HeroImage: FC = (): ReactElement => {
  return (
    <div className={styles.hero_image_wrapper}>
      <NextImage
        src="/hero/1920-hero.png"
        width={1760}
        height={600}
        loading="lazy"
        className={styles.hero_image}
        alt="hero image"
      />
    </div>
  );
};

export default HeroImage;
