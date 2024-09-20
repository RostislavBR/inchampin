import { FC, ReactElement } from "react";
import { HeroContentProps } from "@interfaces/Hero";
import styles from "./styles.module.scss";

const HeroContentSVG: FC<HeroContentProps> = ({ status }): ReactElement => {
  return (
    <div
      className={`${styles.hero_svg_wrapper} ${status ? styles.animate : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 112"
        fill="none"
        className={styles.hero_svg_one}
      >
        <path d="M13.5635 111.018V0.818359H0V111.018H13.5635Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91 112"
        fill="none"
        className={styles.hero_svg_two}
      >
        <path d="M90.303 111.018V0.818359H76.7395V86.8966L13.9882 0.818359H0.0976562V111.018H13.6612V23.1227L77.2296 111.018H90.303Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98 114"
        fill="none"
        className={styles.hero_svg_three}
      >
        <path d="M56.1694 114C75.452 114 88.5254 104.748 97.6771 92.191L86.074 85.748C79.8648 95.165 68.5887 101.774 56.1694 101.774C32.3101 101.774 14.1708 83.1043 14.1708 57C14.1708 30.7304 32.3101 12.2261 56.1694 12.2261C68.5887 12.2261 79.8648 19 86.074 28.2522L97.5131 21.8087C88.8524 9.4174 75.452 0 56.1694 0C24.7928 0 0.117188 23.1304 0.117188 57C0.117188 90.8697 24.7928 114 56.1694 114Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92 112"
        fill="none"
        className={styles.hero_svg_four}
      >
        <path d="M91.8226 111.018V0.818359H78.259V48.2357H14.5264V0.818359H0.962891V111.018H14.5264V60.4618H78.259V111.018H91.8226Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105 112"
        fill="none"
        className={styles.hero_svg_five}
      >
        <path d="M104.612 111.018L60.6526 0.818359H43.8205L0.0253906 111.018H15.5494L25.1911 86.5663H79.446L89.0869 111.018H104.612ZM75.3602 74.3401H29.1129L52.3181 15.027L75.3602 74.3401Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79 112"
        fill="none"
        className={styles.hero_svg_six}
      >
        <path d="M14.3526 111.018V67.2358H44.5842C66.1552 67.2358 78.7385 52.0358 78.7385 34.0271C78.7385 16.0183 66.4822 0.818359 44.5842 0.818359H0.789062V111.018H14.3526ZM42.9499 55.0097H14.3526V13.0444H42.9499C55.8602 13.0444 64.6848 21.6358 64.6848 34.0271C64.6848 46.4184 55.8602 55.0097 42.9499 55.0097Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 112"
        fill="none"
        className={styles.hero_svg_seven}
      >
        <path d="M14.2139 111.018V0.818359H0.650391V111.018H14.2139Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91 112"
        fill="none"
        className={styles.hero_svg_eight}
      >
        <path d="M90.9536 111.018V0.818359H77.3902V86.8966L14.6386 0.818359H0.748047V111.018H14.3115V23.1227L77.8803 111.018H90.9536Z" />
      </svg>
    </div>
  );
};

export default HeroContentSVG;
