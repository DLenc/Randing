import styled from 'styled-components';
import Color from '../../style/color';

interface CircleProps {
  type?: string;
  text?: string;
}

export const Circle = (data: CircleProps) => {
  const text =
    data.type === 'gray' || data.type === 'full' ? '#fff' : Color.dlNavy;

  const border =
    data.type === 'line'
      ? Color.dlNavy
      : data.type === 'none'
      ? 'transparent'
      : Color.gray;

  const background =
    data.type === 'gray'
      ? '#949494'
      : data.type === 'white'
      ? '#fff'
      : data.type === 'full'
      ? Color.dlNavy
      : 'transparent';
  const lines = data.text?.split('<br/>');
  return (
    <>
      <CircleComponent
        style={{
          color: text,
          backgroundColor: background,
          borderColor: border,
          zIndex: data.type === 'white' ? 3 : 2
        }}
      >
        <div> {lines?.map((line, index) => <div key={index}>{line}</div>)}</div>
      </CircleComponent>
    </>
  );
};

export default Circle;

const CircleComponent = styled.div<CircleProps>`
  width: 175.84px;
  height: 175.84px;
  border-radius: 50%;
  border: ${(data) => (data?.type === 'none' ? 'none' : '2.64px solid;')};

  font-size: 24.62px;
  font-weight: 500;
  font-family: 'Pretendard';

  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    text-align: center;
  }
`;
