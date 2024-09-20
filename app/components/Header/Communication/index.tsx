import { FC, ReactElement, memo } from "react";
import { CommunicationProps } from "@interfaces/Header";
import styles from "./styles.module.scss";

const Communication: FC<CommunicationProps> = memo(
  ({ onClick }): ReactElement => {
    return (
      <div className={styles.communication_wrapper}>
        <span className={styles.communication_phone}>+7 495 527 21 21</span>
        <span className={styles.communication_link} onClick={() => onClick()}>
          <span className={styles.text_content}>Заказать звонок</span>
          <span className={styles.text_content}>Заказать звонок</span>
        </span>
      </div>
    );
  },
);

Communication.displayName = "Communication";

export default Communication;
