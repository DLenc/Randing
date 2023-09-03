export interface reviewProps {
  key?: number;
  index?: string;
  title?: string;
  content?: string;
  Image?: string;
}

const Review: reviewProps[] = [
  {
    key: 0,
    index: '01',
    title: '언제나 사람과 환경을 향해 있는 DL이앤씨',
    content:
      'DL이앤씨만의 기술로 절대적인 소음량을 획기적으로 줄인 D-Silent Floor는 연구센터에 위치한 바닥 구조 / 층간 소음 체험 Room을 통해 그 진가를 화인할 수 있었습니다. 앞서 이론 설명만 들었을 때 나름대로 예상했던 감소량보다 훨씬 더 많은 소음을 차단하여 정말 놀랐습니다.👍👍👍',
    Image: './Image/cardImage1.png'
  },
  {
    key: 1,
    index: '02',
    title: '사소한 부분까지도 고려하는 DL이앤씨',
    content:
      'DL이앤씨에서 개발한 D-Silent Floor는 현장 중량 테스트에서 국내 최초 2급을 받았다고 한다. 실험실에서 인증받은 바닥구조와 대규모 시공이 이뤄지는 현장에서 직접 측정한 바닥구조간에 차이가 많이 난다고 한다 그렇기에 DL이앤씨에서 받은 국내 최고성능 등급이 더 의미있다고 생각한다.',
    Image: './Image/cardImage2.png'
  },
  {
    key: 2,
    index: '03',
    title: '진심을 짓다, DL이앤씨',
    content:
      '층간소음은 명확하고 객관적인 데이터가 없어, 개인적인 감정싸움으로 번지기 쉽다. 이를 고려한 DL 이앤씨는 D-Silence Service를 개발해다. 이를 통해 자신이 특정 기준을 초과해 송므을 발생시켰다는 점을 인지하여, 경각심으로 아파트 내 층간 소음이 줄어들게 되며, 결과적으로 사회 문제까지 해결할 수 있는 기술이라고 해도 과언이 아니라고 생각한다.',
    Image: './Image/cardImage3.png'
  },
  {
    key: 3,
    index: '04',
    title: 'DL이앤씨, 고객의 목소리에 주목',
    content:
      'D-silence Service는 실시간으로 소음 발생 빈도를 화인할 수 있고, 데이터를 통해 생활 습관 개선이 가능하며, 지진 알림 시스템으로도 활용이 가능하다는 점이 획기적이라는 생각이 들었습니다. 또한, 층간 소음 분쟁 발생을 사전에 예방할 수 있다는 점도 놀라웠습니다.',
    Image: './Image/cardImage4.png'
  }
];

export default Review;
