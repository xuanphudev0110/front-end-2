import React from "react";
import PropTypes from "prop-types";
import "video-react/dist/video-react.css";
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  BigPlayButton,
  VolumeMenuButton
} from "video-react";

function PlayerVideo({ video, image }) {
  return (
    <Player playsInline poster={image}>
      <BigPlayButton position="center" />
      <source src={video} type="video/mp4" />
      <ControlBar>
        <VolumeMenuButton vertical />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
      </ControlBar>
    </Player>
  );
}
PlayerVideo.propTypes = {
  video: PropTypes.any,
  image: PropTypes.any
};
export default PlayerVideo;
