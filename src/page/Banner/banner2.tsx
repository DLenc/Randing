import styled from 'styled-components';
import Color from '../../style/color';
import FONT from '../../style/font';

const Banner2 = () => {
  return (
    <Container>
      <Description>
        <img
          src={require('../../assets/image/Poster.png')}
          width={927}
          height={311}
        />
        <Text>
          <p></p>
          <div style={FONT.Banner3}>NE(O)DINARY</div>
          <div style={FONT.Banner3}>DEMODAY</div>
          <div style={FONT.Banner3}>9/8-9/9</div>
        </Text>
      </Description>
      <DescriptionText>
        <div style={FONT.Banner2}>
          층간 소음때문에 겪었던 스트레스나 본인만의 층간소음
        </div>
        <div style={FONT.Banner2}>
          관련 에피소드를 “아랫집 사용설명서” 엽서에 자유롭게 작성해주세요!
        </div>
      </DescriptionText>
    </Container>
  );
};

export default Banner2;

const Container = styled.div`
  padding: 70px 0 70px 40px;
  background-color: ${Color.dlNavy};
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0px 225px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-left: 25px;
`;

const DescriptionText = styled.div`
  padding: 50px 225px;

  display: flex;
  flex-direction: column;
  align-items: start;
`;
