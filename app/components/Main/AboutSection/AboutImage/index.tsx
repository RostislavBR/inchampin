import { FC, ReactElement } from "react";
import NextImage from "next/image";
import styles from "./styles.module.scss";

const AboutImage: FC = (): ReactElement => {
  return (
    <div className={styles.about_image_wrapper}>
      {/*<span>о проекте</span>*/}
      <NextImage
        src={"/about/about.png"}
        width={1086}
        height={725}
        className={styles.about_image}
        alt={"about image"}
      />
    </div>
  );
};

export default AboutImage;
