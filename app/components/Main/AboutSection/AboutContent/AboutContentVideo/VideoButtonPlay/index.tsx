import { FC, memo, ReactElement } from "react";
import styles from "./styles.module.scss";

interface VideoPlayButtonProps {
  handlePlay: () => void;
}

const VideoButtonPlay: FC<VideoPlayButtonProps> = memo(
  ({ handlePlay }): ReactElement => {
    return (
      <div className={styles.play_button_wrapper}>
        <button onClick={() => handlePlay()} className={styles.play_button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
          >
            <path
              d="M8.40688 4.12379C9.09766 4.50371 9.09766 5.49629 8.40688 5.87622L1.48192 9.68495C0.815465 10.0515 4.27037e-08 9.56933 7.7604e-08 8.80873L4.27131e-07 1.19127C4.62031e-07 0.430668 0.815467 -0.0514935 1.48192 0.315055L8.40688 4.12379Z"
              fill="white"
            />
          </svg>
          <span>Play</span>
        </button>
      </div>
    );
  },
);

VideoButtonPlay.displayName = "VideoButtonPlay";

export default VideoButtonPlay;
