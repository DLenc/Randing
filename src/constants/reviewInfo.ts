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
    url: 'https://velog.io/@marchfirst01/DL%EC%9D%B4%EC%95%A4%EC%94%A8-%EA%B8%B0%EC%88%A0-%EA%B2%AC%ED%95%99-bswjc1ow'
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
  },
  {
    key: 4,
    index: '05',
    title: '사회적 문제를<br/>해결하고자 하는 DL이앤씨',
    content:
      'D-Silence Service는 벽체에 설치된 센서가 층간소음을 일으킬 만한 충격을 감지하면, 아래 사진처럼 거주자에게 층간소음이 일어날 수 있다는 알림이 월패드에 전송된다고 합니다. <b>집안에서 월패드로 미리 알려주면, 윗집은 층간소음의 명확한 기준을 알 수 있기 때문에, 사전에 층간소음으로 인한 감정 갈등을 차단할 수 있어서 너무 좋은 것 같습니다.</b> 견학을 통해 <b>DL이앤씨는</b> 단순히 건물을 짓는 것에만 초점을 두지 않고, <b>어떻게 하면 사람들이 더 편안하게 생활할 수 있을지를 고민하고 있다는 느낌을 받았습니다.</b>',
    Image: './Image/cardImage4.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=soom_out&logNo=223200082626&proxyReferer='
  },
  {
    key: 5,
    index: '06',
    title: '최고의 기술력과 건전한<br/>비전이 합쳐진 DL이앤씨',
    content:
      '대부분 층간소음에서 소음 제공자는 가해자입니다. 불편함을 만든 사람이니까요. 하지만 <b>DL이앤씨는 이들을 가해자로 생각하지 않았습니다. 그게 저한테는 시야가 넓다고 느껴졌습니다.</b> 물론 상대를 고통스럽게 하고자 하는 의도로 소음을 만든 사람은 가해자가 맞지만, 유년기의 아이가 있는 집이라거나 바닥 자체가 충격음을 제대로 흡수하지 못하게 설계되어 쉽게 소음이 발생하는 집이라면 이야기가 다릅니다. <b>DL이앤씨는 이런 분들도 신경을 씁니다. 그래서 나온 DL이앤씨의 층간소음 솔루션이 D-Silent Floor와 D-Silence Service입니다.</b>',
    Image: './Image/cardImage4.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=chaerriezz&logNo=223202218607&proxyReferer='
  },
  {
    key: 6,
    index: '07',
    title: '끊임 없는 연구와<br/>개발을 시도하는 DL이앤씨',
    content:
      '<b>D-Silent Floor는 총 세 차례에 걸쳐, 건축 구조에 의해 진동 및 소음이 필터링 되어 소음을 줄여주는 기술입니다.</b> 위층에서 전달되는 진동이 1차적으로 걸러진 후, ‘이격형 측명 완충재’ 및 ‘공진제어 패널 우물형 전장구조’를 통해 윗집의 소음을 최소로 만들어줍니다. 이런 D-Silent Floor는 국내 최초 현장 중량 2급 인정서를 확보했다고 합니다. <b>또한, 현재 중량 충격음 2등급의 바닥구조를 상용화한 건설사는 국내에 아직 존재하지 않는데, DL이앤씨는 올해 10월 안에 D-Silent Floor를 사용한 아파트 상용화 예정</b>이라고 합니다. 정말 대단하죠!',
    Image: './Image/cardImage4.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=pig771&logNo=223201588458&proxyReferer='
  },
  {
    key: 7,
    index: '08',
    title: '진심이 가득한 곳,<br/>DL이앤씨',
    content:
      'D-Silent Floor의 경우에는 선몰탈 구조가 특징으로, <b>바닥의 두께를 일정하게 유지하면서 소음을 차감한다는 점에서 기술력의 대단함</br>을 느꼈습니다. D-Silence Service는 세대 내에서 일정 레벨 이상의 진동이 발생할 경우 이를 감지하고 세대 내 월패드로 거주자에게 알림이 가는 시스템이라고 합니다. 층간소음 갈등 원인 중 하나가 스스로 내는 소음은 알아채기가 어려워, 내가 층간소음의 주범될 수 있다는 사실은 생각도 못한 채, 남이 나에게 끼치는 피해에만 집중한다는 점입니다. 그런데 <b>내 집이 알아서 소음을 감지하고 나에게 알려준다면, 스스로 조심하게 되면서 세대 간 갈등을 미연에 방지해준다는 점이 좋았습니다.</b>',
    Image: './Image/cardImage4.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=g9traveler_j&logNo=223200080441&proxyReferer='
  },
  {
    key: 8,
    index: '09',
    title: '층간소음을 관계적인 시각<br/>으로 풀어낸 DL이앤씨',
    content:
      '<b>D-Silence Service는 층간소음을 관계적인 시각으로 풀어낸 DL이앤씨의 똑똑한 기술이에요.</b> 보통 건설사에서 층간소음을 해결한다고 하면 바닥을 더 두껍게 하거나, 특수 자재를 활용하는 등의 기술적 측면에만 집중할 것 같은데, DL이앤씨는 한 단계 더 나아가는 모습이었습니다. <b>D-Silence Service는 층간소음 자동 측정 + 알림 기술을 통해 층간소음으로 발생할 수 있는 세대 간 감정적 갈등까지 해결해주는 서비스를 제공</b>한다고 합니다. 이렇게 윗집-아랫집 모두가 납득할 수 있는 기준점을 제공한다면 층간소음 문제가 감정싸움으로 번지게 되는 일을 막을 수 있다고 생각합니다.',
    Image: './Image/cardImage4.png',
    url: 'https://m.blog.naver.com/PostView.naver?blogId=give_ly&logNo=223199686163&proxyReferer='
  }
];

export default Review;
