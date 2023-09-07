import styled from 'styled-components';
import FONT from '../style/font';
import { ReactComponent as Youtube } from '../assets/icon/Youtube.svg';
import { ReactComponent as Blog } from '../assets/icon/Blog.svg';
import { ReactComponent as NaverTV } from '../assets/icon/NaverTV.svg';
import Links from '../constants/link';

const Footer = () => {
  return (
    <Container>
      <img
        src={require('../assets/logo/LogoNavy.png')}
        alt=''
        width={333}
        height={51.7}
      />
      <Link>
        <Title style={FONT.Footer}>DL이앤씨 디지털 채널</Title>
        {Links.map((link) => (
          <a href={link.link} key={link.title}>
            {link.title === 'Youtube' && <Youtube />}
            {link.title === 'Blog' && <Blog />}
            {link.title === 'NaverTV' && <NaverTV />}
          </a>
        ))}
      </Link>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  padding: 119.84px 155px 110.22px 144.69px;
  align-items: center;
`;

const Title = styled.div`
  margin-right: 24px;
`;

const Link = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 44px;
`;
