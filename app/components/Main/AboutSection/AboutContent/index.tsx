import { FC, ReactElement, useEffect, useRef, useState } from "react";
import AboutContentText from "@components/Main/AboutSection/AboutContent/AboutContentText";
import AboutContentVideo from "@components/Main/AboutSection/AboutContent/AboutContentVideo";
import styles from "./styles.module.scss";

const AboutContent: FC = (): ReactElement => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= 0 &&
          !isTriggered
        ) {
          setIsTriggered(true);
        } else if (
          (rect.top > window.innerHeight || rect.bottom < 0) &&
          isTriggered
        ) {
          setIsTriggered(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTriggered]);

  return (
    <div className={styles.about_content_wrapper} ref={aboutRef}>
      <AboutContentText visible={isTriggered} />
      <AboutContentVideo />
    </div>
  );
};

export default AboutContent;
