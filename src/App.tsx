import styled from 'styled-components';
import ReviewList from './page/review/review';
import YoutubeBox from './page/youTube/youTube';

function App() {
  return (
    <Container>
      <YoutubeBox />
      <ReviewList />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1688.05px;
  margin: 0 auto;
`;

export default App;
