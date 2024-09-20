import { FC, ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
