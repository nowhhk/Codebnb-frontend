import React from "react";
import styled from "styled-components";
import ImageSlider from "./Slider/ImageSlider";

const SingleList = () => {
  return (
    <Container>
      <ImageSlider />
      <DetailContainer>
        <div style={{ justifyContent: "normal" }}>
          <Subtitle>
            <div style={{ display: "flex" }}>
              <div>슈퍼호스트Tag</div>
              <div style={{ marginLeft: "1em" }}>집전체(Type of place)</div>
            </div>
            <div>
              <i className="fas fa-star" style={{ color: "red" }}></i>
              <span style={{ marginLeft: ".25em" }}>4.94(rating)</span>
            </div>
          </Subtitle>
          <Header>[New 오픈] "마리따"m01, 바닷가바로 앞 (Title)</Header>
          <Options>
            <p>인원 2명 · 침실 1개 · 침대 1개 · 욕실 1개 · (options)</p>
            <p>무료 주차공간 · 에어컨 · 주방 · 헤어드라이어 · (options)</p>
          </Options>
        </div>
        <Bottom>
          <Tag>
            <i className="far fa-gem"></i>
            <span style={{ marginLeft: ".5em" }}>
              예약이 금방 마감되는 숙소(tag)
            </span>
          </Tag>
          <div>
            <Price>
              <span>₩110,000</span>
              <span style={{ fontWeight: "normal", color: "#767676" }}>
                /1박
              </span>
            </Price>
            <Total>
              <span>총 요금: ₩273,882</span>
              <i
                className="fas fa-question-circle"
                style={{ marginLeft: ".35em" }}
              ></i>
            </Total>
          </div>
        </Bottom>
      </DetailContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 0 0 1em 0;
  border-bottom: 1px solid #e4e4e4;
`;

const DetailContainer = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1em;
`;

const Subtitle = styled.h3`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${(props) => props.theme.color.gray};
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: 1.25rem;
  font-weight: normal;
  color: ${(props) => props.theme.color.black};
  margin: 0.75em 0;
`;

const Options = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.color.gray};
  margin: 0.75em 0;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Tag = styled.div`
  font-size: 0.875rem;
  background-color: #f0f0f0;
  padding: 0.5em 1em;
  border-radius: 1.5em;
`;

const Price = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0.5em 0;
`;

const Total = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.gray};
`;

export default SingleList;
