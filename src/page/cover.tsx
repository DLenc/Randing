import styled from 'styled-components';
import Color from '../style/color';
import FONT from '../style/font';

import Triangle from '../component/triangle';

// import { ReactComponent as Xicon } from '../../assets/icon/Xicon.svg';
// import { ReactComponent as SoftSquared } from '../../assets/logo/SoftSquared.svg';
// import { ReactComponent as DLenc } from '../../assets/logo/DLenc.svg';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';

const Cover = () => {
  return (
    <>
      <Container>
        <Icon>
          <Logo />
          {/* <DLenc />
          <Xicon />
          <SoftSquared /> */}
        </Icon>
        <Title1 style={FONT.Head1}>층간소음 Solution,</Title1>
        <Title2 style={FONT.Head2}>D-Silent Floor & D-Silence Service</Title2>
      </Container>
      <TriangleBox>
        <Triangle />
      </TriangleBox>
    </>
  );
};

export default Cover;

const Container = styled.div`
  width: 1688.05px;
  background-color: ${Color.dlNavy};
  color: #fff;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  display: table-cell;
  padding-top: 222.75px;
  padding-bottom: 277.3px;
  border-radius: 87.92px;
`;

const Title1 = styled.div`
  width: 100%;
  margin-top: 60.66px;
`;

const Title2 = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TriangleBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  margin-left: 44%;
`;
