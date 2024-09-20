import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import VideoButtonPlay from "@components/Main/AboutSection/AboutContent/AboutContentVideo/VideoButtonPlay";
import AboutContentVideoText from "@components/Main/AboutSection/AboutContent/AboutContentVideo/AboutVideoText";
import styles from "./styles.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AboutVideo: FC = (): ReactElement => {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = useCallback(() => {
    setIsFullscreen(true);

    if (playerContainerRef.current) {
      const container = playerContainerRef.current;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    }
  }, []);

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        handleClose();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isFullscreen, handleClose]);

  return (
    <div className={styles.about_content_video_wrapper}>
      <AboutContentVideoText />

      <div
        className={`${styles.about_content_container_video} ${isFullscreen ? styles.fullscreen : ""}`}
        ref={playerContainerRef}
      >
        {isFullscreen && (
          <button className={styles.close_btn} onClick={() => handleClose()} />
        )}
        {!isFullscreen && <VideoButtonPlay handlePlay={handlePlay} />}
        <ReactPlayer
          url="/about/mywork.mp4"
          playing={isFullscreen}
          controls={isFullscreen}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default AboutVideo;
