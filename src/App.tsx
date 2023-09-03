import styled from 'styled-components';
import Banner1 from './page/Banner/banner1';
import Cover from './page/cover';
import Info1 from './page/Info/Info1';
import Info2 from './page/Info/Info2';
import Info3 from './page/Info/Info3';
import ReviewList from './page/review/review';

function App() {
  return (
    <Container>
      <Cover />
      <ReviewList />
      <Info1 />
      <Banner1 />
      <Info2 />
      <Info3 />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1688.05px;
  margin: 0 auto;
`;

export default App;
