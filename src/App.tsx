import styled from 'styled-components';
import Banner1 from './page/Banner/banner1';
import Banner2 from './page/Banner/banner2';
import Cover from './page/cover';
import Footer from './page/footer';
import Info1 from './page/Info/Info1';
import Info2 from './page/Info/Info2';
import Info3 from './page/Info/Info3';
import ReviewList from './page/review/review';

function App() {
  return (
    <Container>
      <Cover />
      <ReviewList />
      <Banner1 />
      <Info1 />
      <Info2 />
      <Info3 />
      <Banner2 />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 1688px;
  margin: 0 auto;
  overflow: hidden;
`;

export default App;
