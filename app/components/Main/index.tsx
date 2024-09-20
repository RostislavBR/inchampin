"use client";

import { FC, ReactElement } from "react";
import Container from "@components/common/Container";
import HeroSection from "@components/Main/HeroSection";
import AboutSection from "@components/Main/AboutSection";
import styles from "./styles.module.scss";

const Main: FC = (): ReactElement => {
  return (
    <main className={styles.main}>
      <Container>
        <HeroSection />
        <AboutSection />
      </Container>
    </main>
  );
};

export default Main;
