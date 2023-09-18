import styled from 'styled-components';
import { ReactComponent as Right } from '../assets/icon/Right.svg';

export const GradientComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <Gradient>
      <RightButton onClick={onClick}>
        <Right />
      </RightButton>
    </Gradient>
  );
};
const Gradient = styled.div`
  width: 450px;
  height: 710px;
  background-color: rgba(249, 249, 249, 0.6);
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
`;

const RightButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 315px;
  right: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
