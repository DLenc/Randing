import { CSSProperties } from 'react';
import Color from './color';

const Title1: CSSProperties = {
  color: Color.dlNavy,
  fontSize: '42.201px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const Title2: CSSProperties = {
  color: Color.dlNavy,
  fontSize: '49.235px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const Title3: CSSProperties = {
  color: Color.dlNavy,
  fontSize: '36.5px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const Sub: CSSProperties = {
  color: Color.subText,
  fontSize: '31.651px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const Content: CSSProperties = {
  color: Color.subText,
  fontSize: '21.101px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const SubContent: CSSProperties = {
  color: 'white',
  fontSize: '21.101px',
  fontWeight: 500,
  lineHeight: 'normal'
};

const Description: CSSProperties = {
  color: Color.subText,
  fontSize: '24.617px',
  fontWeight: 500,
  lineHeight: 'normal',
  fontFamily: 'Pretendard'
};

const FONT = {
  Title1,
  Title2,
  Title3,
  Sub,
  Content,
  SubContent,
  Description
};

export default FONT;
