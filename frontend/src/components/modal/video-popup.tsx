import React from "react";
import ModalVideo from "react-modal-video";

// prop type
type IPropType = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId: string;
};

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "TYYf8zYjP5k",
}: IPropType) => {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopup;
