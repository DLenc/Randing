import styled from 'styled-components';
import Card from '../../component/Card';
import reviewsData, { reviewProps } from '../../constants/reviewInfo';
import Color from '../../style/color';
import FONT from '../../style/font';

const ReviewList = () => {
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
        {reviewsData.map((review: reviewProps) => (
          <div key={review.key}>
            <Card
              index={review.index}
              title={review.title}
              content={review.content}
              Image={review.Image}
            />
          </div>
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

  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    max-width: 259.362px;
    height: 11.43px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 87.919px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Color.dlNavy};
    border-radius: 87.919px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
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
