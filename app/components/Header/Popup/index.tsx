import { FC, ReactElement, memo, useEffect, useRef } from "react";
import PopupTitle from "@components/Header/Popup/PopupTitle";
import PopupForm from "@components/Header/Popup/PopupForm";
import CloseButton from "@components/common/CloseButton";
import { PopupProps } from "@interfaces/Popup";
import styles from "./styles.module.scss";

const Popup: FC<PopupProps> = memo(
  ({ visible, onClose }): ReactElement | null => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);

    if (!visible && !popupRef.current?.classList.contains(styles.active)) {
      return null;
    }

    return (
      <div
        className={`${styles.popup_wrapper} ${visible ? styles.active : styles.inactive}`}
        ref={popupRef}
      >
        <CloseButton onClose={onClose} />
        <PopupTitle />
        <PopupForm onClose={onClose} />
      </div>
    );
  },
);

Popup.displayName = "Popup";

export default Popup;
