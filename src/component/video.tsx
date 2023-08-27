import YouTube, { YouTubeProps } from 'react-youtube';
import Videos from '../constants/videos';
import Color from '../style/color';
import styled from 'styled-components';

const opts: YouTubeProps['opts'] = {
  height: '343.573',
  width: '610.796',
  playerVars: {
    autoplay: 0,
    rel: 0
  }
};

const Video = ({ videoId }: { videoId: string }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};

const VideoBox = () => {
  return (
    <Box>
      {Videos.map((video) => (
        <Video key={video.title} videoId={video.videoId} />
      ))}
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  margin-top: 87.83px;
  display: flex;
  gap: 27.26px;
  overflow-x: scroll;
  padding-bottom: 39.22px;

  &::-webkit-scrollbar {
    max-width: 259.362px;
    height: 11.43px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 87.919px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Color.dlNavy};
    border-radius: 87.919px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export default VideoBox;
