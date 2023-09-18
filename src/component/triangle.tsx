import styled from 'styled-components';
import Color from '../style/color';

import { ReactComponent as DownArrow } from '../assets/icon/DownArrow.svg';

const Triangle = () => {
  return (
    <Container>
      <RectangleLeft />
      <Circle>
        <DownArrow />
      </Circle>
      <RetangleRight />
    </Container>
  );
};

export default Triangle;

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 131.88px;
  height: 137.92px;
  border-radius: 50%;
  background-color: ${Color.dlNavy};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 1000;
  position: absolute;
  top: 14.5px;
  left: 26px;
  svg {
    margin-top: 75px;
  }
`;

const RectangleLeft = styled.div`
  transform: rotate(115deg);
  width: 50px;
  height: 180px;
  background-color: ${Color.dlNavy};
  border-radius: 100px;
  position: absolute;
  left: 0px;
  top: 8.9px;
`;

const RetangleRight = styled.div`
  transform: rotate(65deg);
  width: 50px;
  height: 180px;
  background-color: ${Color.dlNavy};
  border-radius: 100px;
  position: absolute;
  left: 140px;
  top: 7px;
`;
