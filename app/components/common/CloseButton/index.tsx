import { FC, memo, ReactElement } from "react";
import { CloseButtonProps } from "@interfaces/Popup";
import styles from "./styles.module.scss";
import NextImage from "next/image";

const CloseButton: FC<CloseButtonProps> = memo(({ onClose }): ReactElement => {
  return (
    <div className={styles.close_button_wrapper}>
      <button className={styles.close_button} onClick={() => onClose()}>
        <NextImage
          width={26}
          height={26}
          src={"/svg/close.svg"}
          alt={"close"}
        />
      </button>
    </div>
  );
});

CloseButton.displayName = "CloseButton";

export default CloseButton;
