import styled from 'styled-components';
import Color from '../../style/color';
import FONT from '../../style/font';

const Banner1 = () => {
  return (
    <Container>
      <div style={FONT.Banner}>
        후기로 먼저 만난 DL이앤씨의 기술에 대해 자세히 알아볼까요?
      </div>
    </Container>
  );
};

export default Banner1;

const Container = styled.div`
  padding: 140px 0 140px 0;
  background-color: ${Color.dlNavy};
  text-align: center;
`;
