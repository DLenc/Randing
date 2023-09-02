import styled from 'styled-components';
import Color from '../../style/color';
import Circle from './circle';

import { ReactComponent as ArrowHead } from '../../assets/icon/ArrowHead.svg';

const Graph = () => {
  return (
    <Container>
      <First />
      <Line style={{ width: 120 }} />
      <Second />
      <Line style={{ width: 80 }} />
      <Third />
      <Line style={{ width: 80 }} />
      <ArrowHead />
      <Fourth />
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 110.98px;
  margin-bottom: 63.3px;
  width: fit-content;
  margin-left: auto;
`;
const Line = styled.div`
  height: 2.64px;
  background-color: ${Color.gray};
  margin-right: -11px;
`;
const First = () => {
  return (
    <ModuleContainer>
      <Fallen>
        <Circle type='gray' text='센서모듈<br/>#1' />
        <Circle type='gray' text='센서모듈<br/>#2' />
      </Fallen>
      <One>
        <Circle type='gray' text='BLE 모듈' />
      </One>
      <ModuleBox />
    </ModuleContainer>
  );
};

const Second = () => {
  return (
    <SecondContainer>
      <Overlap>
        <Circle type='white' text='인터넷' />
        <Circle type='full' text='단지서버<br/>(DL통합서버)' />
      </Overlap>
    </SecondContainer>
  );
};

const Third = () => {
  return (
    <Squared>
      <Overlap>
        <Circle type='line' text='월패드' />
        <Circle type='line' text='클라우드<br/>서버' />
      </Overlap>
      <Overlap>
        <Circle type='line' text='단지<br/>모니터링' />
        <Circle type='line' text='입주자용<br/>APP' />
      </Overlap>
    </Squared>
  );
};

const Fourth = () => {
  return (
    <FourthContainer>
      <Circle type='line' text='층간소음<br/>민원 시' />
      <Circle type='none' text='내/외부기간<br/>데이터 활용' />
    </FourthContainer>
  );
};

const ModuleContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const ModuleBox = styled.div`
  height: 216.282px;
  width: 187.268px;
  border: 2.64px solid ${Color.gray};
  border-left: none;
  position: relative;
  margin-left: -280px;
  z-index: 1;
`;

const SecondContainer = styled.div`
  width: 218.919px;
  height: 392.121px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  justify-content: center;
  border: 2.64px solid ${Color.gray};
  margin-left: 11px;
`;

const Squared = styled.div`
  display: flex;
  align-items: center;
  margin-top: -25px;
  margin-left: -38px;
  margin-right: -20px;
  > div {
    margin-right: -25px;
  }
`;
const FourthContainer = styled.div`
  margin-top: 110px;
  > div {
    margin-bottom: -30px;
  }
`;

const One = styled.div`
  width: fit-content;
  height: fit-content;
  vertical-align: middle;
  display: table-cell;
  z-index: 2;
`;

const Fallen = styled.div`
  gap: 40.44px;
  display: flex;
  flex-direction: column;
  margin-right: 11.43px;
`;

const Overlap = styled.div`
  gap: -10px;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: -25px;
  }
`;
