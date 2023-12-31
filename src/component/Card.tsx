import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assets/icon/Arrow.svg';
import Color from '../style/color';
import FONT from '../style/font';

interface CardProps {
  index?: string;
  title?: string;
  content?: string;
  Image?: string;
  url?: string;
}

const Card = (props: CardProps) => {
  const textColor = props.index === '01' ? 'white' : Color.subText;

  const titles = props.title?.split('<br/>');
  const content = props.content as string;
  const url = props.url;

  return (
    <Container>
      <Front index={props.index}>
        <Index>
          <div style={{ ...FONT.Title3, color: textColor }}>{props.index}</div>
          <div style={{ ...FONT.Title3, color: textColor }}>
            {titles?.map((title, index) => <div key={index}>{title}</div>)}
          </div>
        </Index>
        <Content
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ ...FONT.Content, color: textColor }}
        ></Content>
        <Arrow stroke={textColor} onClick={() => window.open(url, '_blank')} />
      </Front>
    </Container>
  );
};

const Container = styled.div`
  display: inline-grid;
  grid-area: 1 / 1 / 1 / 1;

  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Index = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div`
  height: 320px;
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

export default Card;
