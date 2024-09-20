import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

interface BlurLayoutProps {
  status: boolean;
}

const BlurLayout: FC<BlurLayoutProps> = ({ status }): ReactElement => {
  return (
    <div
      className={`${styles.blur_layout} ${status ? styles.active_blur : ""}`}
    ></div>
  );
};

export default BlurLayout;
