import { FC, ReactElement, useEffect, useState } from "react";
import HeroContentSVG from "@components/Main/HeroSection/HeroContent/HeroContentSVG";
import HeroTitle from "@components/Main/HeroSection/HeroContent/HeroTItle";
import styles from "./styles.module.scss";

const HeroContent: FC = (): ReactElement => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);

  return (
    <div className={styles.hero_content_wrapper}>
      <HeroTitle />
      <HeroContentSVG status={animate} />
    </div>
  );
};

export default HeroContent;
