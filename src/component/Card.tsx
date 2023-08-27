import styled from 'styled-components';
import FONT from '../style/font';

const Card = () => {
  return (
    <Container>
      <div style={FONT.Title1}></div>
      <div style={FONT.Title2}></div>
      <div style={FONT.Sub}></div>
    </Container>
  );
};

const Container = styled.div`
  padding: 145.95px 0 146.48px 219.8px;
`;

export default Card;
