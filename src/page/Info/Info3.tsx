import styled from 'styled-components';
import FONT from '../../style/font';

function Info() {
  return (
    <Container>
      <Text>
        <div style={FONT.Title1}>
          건축환경 연구센터 (층간소음 저감기술 체험관)
        </div>
        <div style={FONT.Sub}>
          DL 이앤씨에서는 층간소음 저감기술을 집약하여 국내 최초로 중량2급
          성능의 D-Silent Floor를 개발하였습니다. 층간소음 저감기술 체험관에서는
          일반적인 바닥구조와 D-Silent Floor의 층간소음 저감 성능의 차이를
          체험할 수 있습니다.
        </div>
        <div style={FONT.Sub}>
          또한 실시간으로 바닥진동을 측정하여 하부층의 소음도를 예측하고
          층간소음 발생여부를 월패드로 알려주는 층간소음 시각화 솔루션인
          D-Silence Service도 체험할 수 있습니다.
        </div>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: url(./background.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
`;

const Text = styled.div`
  height: 290px;

  margin: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Info;
