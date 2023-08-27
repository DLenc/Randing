import styled from 'styled-components';
import VideoBox from '../../component/video';
import FONT from '../../style/font';

const YoutubeBox = () => {
  return (
    <Container>
      <div style={FONT.Title2}>D-Silent Floor에 대해 더 알고 싶다면?</div>
      <VideoBox />
    </Container>
  );
};

const Container = styled.div`
  padding: 145.95px 0 146.48px 219.8px;
`;

export default YoutubeBox;
