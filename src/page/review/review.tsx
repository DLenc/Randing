import styled from 'styled-components';
import Card from '../../component/Card';
import reviewsData, { reviewProps } from '../../constants/reviewInfo';
import Color from '../../style/color';
import FONT from '../../style/font';
import { useState } from 'react';
import { GradientComponent } from '../../component/gradient';

const ReviewList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <div style={FONT.Content}>층간소음 저감기술 체험관 경험후기</div>
          <div style={FONT.Title1}>DL이앤씨와 함께</div>
          <div style={FONT.Title1}>
            만들어 나가는{' '}
            <span style={{ fontWeight: 500 }}>층간소음 솔루션</span>
          </div>
        </HeaderTitle>
        <QR></QR>
      </Header>
      <ReviewListContainer>
        <GradientComponent onClick={handleRightButtonClick} />
        {reviewsData.map((review: reviewProps) => (
          <CardContainer key={review.key} currentIndex={currentIndex}>
            <Card
              index={review.index}
              title={review.title}
              content={review.content}
              Image={review.Image}
            />
          </CardContainer>
        ))}
      </ReviewListContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 345.95px 0 146.48px 150px;
  background-color: ${Color.backGray};
  z-index: 1;
`;

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;

const CardContainer = styled.div<{ currentIndex: number }>`
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  transition: transform 0.3s ease;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  height: 175px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 82px;
`;

const QR = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  margin: 0 150px 82px 0;
`;

export default ReviewList;
