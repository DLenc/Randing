interface VideoProps {
  title: string;
  videoId: string; // 오타 수정: vedioId -> videoId
}

const Videos: VideoProps[] = [
  {
    title:
      '[SOUND TEST] 층간 소음의 차이를 실제로 비교해보기_D Silent Floor_DL이앤씨',
    videoId: 'CEZ7PN6IKRw'
  },
  {
    title:
      '[EXPLAIN DL] 우리 집의 층간소음이 심할때 알림으로 알려주는 기술을 체험해보다_층간소음 알리미_디엘이앤씨',
    videoId: 'jTluECmazYc'
  },
  {
    title:
      '[DL CASTER] 견디기 힘든 윗집 층간소음, 줄일 수 있는 방법_D-Silentfloor 체험편',
    videoId: 'hISjgBLtIB0'
  },
  {
    title:
      '[EXPLAIN DL] 드디어 층간소음에서 벗어날 수 있다?! 무려 5단계 층간소음 저감 기술!_D Silent Floor',
    videoId: '2O83gyY4hoc'
  },
  {
    title:
      '미래에는 이 기술이 집을 구하는 기준이 될 것 같다 l 층간소음 걱정 없는 아파트에 살아봅시다',
    videoId: 'X3--tqyScg0'
  }
];

export default Videos;
