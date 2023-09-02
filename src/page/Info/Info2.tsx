import styled from 'styled-components';
import Graph from '../../component/graph/graph';
import Noti from '../../component/noti';
import Color from '../../style/color';
import FONT from '../../style/font';

const Info2 = () => {
  return (
    <Container>
      <Top>
        <Noti />
        <Text>
          <div style={FONT.Title1}>D-Silence Service (층간소음 알리미)</div>
          <div style={FONT.Sub}>
            D-Silence Service는 거주 공간의
            <br /> 층간소음을 측정하고 층간소음 발생을 시각화하여 <br />
            층간소음 분쟁을 줄이기 위한 솔루션입니다.
          </div>
          <div style={FONT.Description}>
            층간소음 발생 시, 세대 월패드 알람표시를 통해 층간소음 예방
          </div>
        </Text>
      </Top>
      <Graph />
      <div style={FONT.Description}>D-사일런스 서비스 프로세스</div>
    </Container>
  );
};
export default Info2;

const Container = styled.div`
  background-color: ${Color.backGray};
  padding: 203.97px 256.05px 115.67px 150px;
`;

const Top = styled.div`
  width: 1382px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 768px;
  text-align: right;
  > div {
    margin-bottom: 39.56px;
  }
`;
