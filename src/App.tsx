import styled from 'styled-components';
import YoutubeBox from './page/youTube/youTube';

function App() {
  return (
    <Container>
      <YoutubeBox />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1688.05px;
  margin: 0 auto;
`;

export default App;
