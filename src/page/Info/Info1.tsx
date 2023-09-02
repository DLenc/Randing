import styled from 'styled-components';
import FONT from '../../style/font';

function Info() {
  return (
    <Container>
      <Text>
        <div style={FONT.Title1}>D-Silent Floor (바닥 구조)</div>
        <div style={FONT.Sub}>
          D-Silent Floor는 슬래브 상부 진동 감쇠용 선몰탈로 바닥의 평탄도를
          확보하고 고성능 복합형 완충재와 상부 crack 방지용 마감몰탈의 3중구조를
          통해 차음 성능을 향상시킨 바닥구조입니다.
        </div>
        <div style={FONT.Content}>
          * 국내 최초 중량 2급 인정서 획득 & 22년 표준화 완료, 23년 9월 상용화
          예정
        </div>
      </Text>
      <Img>
        <img src='./floor.png' alt='floor' />
      </Img>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Text = styled.div`
  height: 290px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.image`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Info;
