import styled from 'styled-components';
import Color from '../style/color';

import { ReactComponent as Alret } from '../assets/icon/Alret.svg';
import FONT from '../style/font';

const Noti = () => {
  return (
    <Container>
      <Top>
        <Alret />
        <div style={FONT.Alert1}>D-사일런스 서비스</div>
      </Top>
      <div style={FONT.Alert2}>
        층간 소음이 발생하였습니다.
        <br />
        주의해 주세요.
        <br />
        발생시간: 2023.08.23 09:53
      </div>
      <Button style={FONT.Alert3}>확인</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Color.dlNavy};
  border-radius: 17.584px;
  padding: 36.94px 43.08px 31.65px 45.72px;
  box-shadow: 5px 5px 10px rgba(12, 36, 24, 0.2);
  max-height: 309.477px;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 16.03px;
  gap: 17.58px;
`;

const Button = styled.div`
  width: 417.617px;
  height: 52.752px;
  border-radius: 6.154px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 31.43px;
`;
export default Noti;
