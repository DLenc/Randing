import styled from 'styled-components';
import Color from '../style/color';
import FONT from '../style/font';
import { ReactComponent as Arrow } from '../assets/icon/Arrow.svg';

interface CardProps {
  index?: string;
  title?: string;
  content?: string;
  Image?: string;
}

const Card = (props: CardProps) => {
  const textColor = props.index === '01' ? 'white' : Color.subText;
  return (
    <Container>
      <Front index={props.index}>
        <Index>
          <div style={{ ...FONT.Title3, color: textColor }}>{props.index}</div>
          <div style={{ ...FONT.Title3, color: textColor }}>{props.title}</div>
        </Index>
        <div style={{ ...FONT.Content, color: textColor }}>{props.content}</div>
        <Arrow stroke={textColor} />
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

const Front = styled.div<{ index?: string }>`
  width: 449px;
  height: 600px;
  background-color: ${(props) =>
    props.index === '01' ? Color.dlNavy : 'white'};

  padding: 38px;
  margin: 10px;

  border: 1px solid #d1d1d1;
  border-radius: 23px;
  grid-area: 1 / 1 / 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > svg {
    margin-left: auto;
  }
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
