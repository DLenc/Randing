import styled from 'styled-components';
import FONT from '../style/font';

interface CardProps {
  index?: string;
  title?: string;
  content?: string;
  Image?: string;
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <Front>
        <Index>
          <div style={FONT.Title3}>{props.index}</div>
          <div style={FONT.Title3}>{props.title}</div>
        </Index>
        <div style={FONT.Content}>{props.content}</div>
        <Img>
          <img src='./arrow.png' alt='arrow' width={76} />
        </Img>
      </Front>
      <Back>
        <img src={props.Image} alt='CardImage' width={525} height={676} />
      </Back>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: inline-grid;
  grid-area: 1 / 1 / 1 / 1;

  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover {
    transition: transform 1s;
    transform: perspective(800px) rotateY(180deg);
  }
`;

const Index = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.image`
  margin-left: auto;
`;

const Front = styled.div`
  width: 449px;
  height: 600px;

  padding: 38px;
  margin: 10px;

  border: 1px solid #d1d1d1;
  border-radius: 23px;
  grid-area: 1 / 1 / 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Back = styled.div`
  box-sizing: border-box;

  width: 527px;
  height: 678px;

  margin: 10px;

  border-radius: 23px;

  transform: rotateY(180deg);
  grid-area: 1 / 1 / 1 / 1;

  transform-style: preserve-3d;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Card;
