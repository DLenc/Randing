import styled from 'styled-components';
import Color from '../../style/color';
import FONT from '../../style/font';
import { ReactComponent as AttackLeft } from '../../assets/icon/AttackLeft.svg';
import { ReactComponent as AttackRight } from '../../assets/icon/AttackRight.svg';

const Banner2 = () => {
  return (
    <Container>
      <Top>
        <AttackLeft />
        <div style={FONT.Pilseng}>아랫집</div>
        <Stroke />
        <Text style={FONT.Banner3}>
          NE(O)RDINARY
          <br />
          DEMODAY
          <br />
          9/8-9/9
        </Text>
      </Top>
      <Middle>
        <div style={FONT.Pilseng}>사용설명서</div>
        <AttackRight />
      </Middle>
      <div style={FONT.Banner2}>
        층간 소음때문에 겪었던 스트레스나 본인만의 층간소음
        <br />
        관련 에피소드를 “아랫집 사용설명서” 엽서에 자유롭게 작성해주세요!
      </div>
    </Container>
  );
};

export default Banner2;

const Container = styled.div`
  padding: 42px 224.5px 90.31px 225px;
  background-color: ${Color.dlNavy};
`;

const Top = styled.div`
  display: flex;
  > svg {
    margin-top: 20px;
`;

const Middle = styled.div`
  display: flex;
  margin-top: -65px;
  padding-left: 65px;
  margin-bottom: 28.69px;
  > svg {
    margin-top: 20px;
    margin-left: -20px;
  }
`;

const Stroke = styled.div`
  width: 491px;
  height: 5px;
  background-color: white;
  margin-left: 55px;
  align-self: center;
`;

const Text = styled.div`
  text-align: right;
  margin-top: 20px;
  margin-left: 26px;
  align-self: center;
`;
