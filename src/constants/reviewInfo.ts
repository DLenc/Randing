export interface reviewProps {
  key?: number;
  index?: string;
  title?: string;
  content?: string;
  Image?: string;
  url?: string;
}

const Review: reviewProps[] = [
  {
    key: 0,
    index: '01',
    title: '언제나 사람과 환경을<br/>향해 있는 DL이앤씨',
    content:
      '<b>DL이앤씨만의 기술로 절대적인 소음량을 획기적으로 줄인 D-Silent Floor</b>는 바닥 구조 / 층간 소음 체험 Room에서 진가를 확인할 수 있었습니다. 앞서 이론 설명만 들었을 때 나름대로 <b>예상했던 감소량보다 훨씬 더 많은 소음을 차단</b>하여 정말 놀랐습니다. 이전까지 저에게 건설사는 딱딱하고 차가운 이미지였는데, 이번 견학을 통해 느낀 것은 지어지는 건물 자체는 차갑고 딱딱할 지 몰라도, <b>그 기반에는 사람을 향한 따뜻하고 부드러운 통찰이 깔려 있다는 것</b>이었습니다.',
    Image: './Image/cardImage1.png',
    url: 'https://www.instagram.com/p/CwwxTdTJk1E'
  },
  {
    key: 1,
    index: '02',
    title: '사소한 부분까지도<br/>고려하는 DL이앤씨',
    content:
      'D-Silent Floor는 현장 중량 테스트에서 국내 최초 2급을 받았다고 하는데, 실험실에서 인증 받은 바닥구조와 현장에서 측정한 바닥구조 간에 차이가 많이 난다고 합니다. <b>그렇기에 DL이앤씨에서 받은 국내 최고성능 등급이 더 의미있다고 생각 했습니다.</b> 또, D-Silence Service는 아랫층 뿐만 아니라 윗층도 층간소음으로 고통을 겪는다는 것에 초점을 맞춘 기획이라고 합니다. 이런 DL이앤씨의 기술들은 입구에서 마주한 <b>‘진심이 짓는다’는 말의 뜻을 느낄 수 있게 해주는 기술들이었습니다.</b>',
    Image: './Image/cardImage2.png',
    url: 'http://bit.ly/45tx1i3'
  },
  {
    key: 2,
    index: '03',
    title: '진심을 짓다,<br/>DL이앤씨',
    content:
      '층간소음은 명확하고 객관적인 데이터가 없어, 개인적인 감정싸움으로 번지기 쉽습니다. 이를 고려한 DL이앤씨는 D-silence Service를 개발했다고 합니다. 이를 통해 자신이 소음을 발생시켰다는 점을 인지해 경각심으로 아파트 내 층간 소음이 줄어들고, <b>결과적으로 문제까지 해결할 수 있는 기술이라고 해도 과언이 아니라고 생각했습니다.</b> 어릴 적 층간 소음때문에 피해를 본 적이 있는데, <b>이런 기술이 있었다면 확연히 달랐을 것 같다는 생각이 들었습니다. 이런 기술은 고객이 겪는 실질적인 불편함을 생각했기 때문에 나올 수 있었던 기술인 것 같습니다.</b>',
    Image: './Image/cardImage3.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=pto_os2&logNo=223201862189&proxyReferer='
  },
  {
    key: 3,
    index: '04',
    title: 'DL이앤씨,<br/>고객의 목소리에 주목',
    content:
      '연구소에서 임팩트 볼과 태핑머신을 이용해 기존 바닥 구조와 D-Silent Floor의 소음 정도를 비교했을 때, 확연한 차이를 느낄 수 있었습니다. <b>D-Silence Service는 실시간으로 소음 발생 빈도를 확인할 수 있고, 데이터를 통해 생활 습관 개선이 가능하며, 지진 알람 시스템으로도 활용이 가능하다는 점이 획기적</b>이란 생각이 들었습니다. 또한, 층간 소음 분쟁 발생을 사전에 예방할 수 있다는 점도 놀라웠습니다.',
    Image: './Image/cardImage4.png',
    url: 'https://www.instagram.com/p/CwwsB0vyUO9/?img_index=1'
  }
];

export default Review;
