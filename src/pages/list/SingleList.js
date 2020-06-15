import React from "react";
import styled from "styled-components";
import ImageSlider from "./Slider/ImageSlider";

const SingleList = ({ rooms }) => {
  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  };

  const discount = (price, rate) => {
    let discount = price * rate;
    return price - discount;
  };

  const calculateTotal = () => {
    //1박 요금 곱하기 몇박 더하기 서비스 수수료
  };

  return (
    <div>
      {rooms.map((house) => {
        return (
          <Container>
            <ImageSlider slides={house.images} heart={house.is_wishlist} />
            <DetailContainer>
              <div style={{ justifyContent: "normal" }}>
                <Subtitle>
                  <div style={{ display: "flex" }}>
                    <div>{house.property_type}</div>
                  </div>
                  <div>
                    <i className="fas fa-star" style={{ color: "red" }}></i>
                    <span style={{ marginLeft: ".25em" }}>
                      {house.rating}({house.reviews})
                    </span>
                  </div>
                </Subtitle>
                <Header>{truncate(house.title)}</Header>
                <Options>
                  <p>
                    인원 {house.max_capacity}명 · 침실 {house.bedrooms}개 · 침대
                    {house.beds}개 · 욕실 1개
                  </p>
                  <p>
                    {house.features.map((f) => {
                      return <span>{f}</span>;
                    })}
                  </p>
                </Options>
              </div>
              <Bottom>
                {house.discount_rate > 0 ? (
                  <Tag>
                    <i className="fas fa-tag"></i>
                    <span style={{ marginLeft: ".5em" }}>더 낮아진 요금</span>
                  </Tag>
                ) : house.tag ? (
                  <Tag>
                    <i className="far fa-gem"></i>
                    <span style={{ marginLeft: ".5em" }}>
                      예약이 금방 마감되는 숙소
                    </span>
                  </Tag>
                ) : (
                  <div></div>
                )}

                <div>
                  <Price>
                    {house.discount_rate > 0 ? (
                      <p>
                        <span className="discount">
                          <span>${house.price}</span>
                        </span>
                        ${discount(house.price, house.discount_rate)}
                      </p>
                    ) : (
                      <span>${house.price}</span>
                    )}
                    <span style={{ fontWeight: "normal", color: "#767676" }}>
                      /1박
                    </span>
                  </Price>
                  <Total>
                    <span>총 요금: ₩273,882{calculateTotal}</span>
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
      })}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 0 0 1.5em 0;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 1.5em;
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
  font-size: 1.125rem;
  line-height: 1.5em;
  font-weight: normal;
  color: ${(props) => props.theme.color.black};
  margin: 0.75em 0;
`;

const Options = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.color.gray};
  margin: 0.75em 0;

  span:after {
    content: " · ";
  }

  span:last-child:after {
    content: "";
  }
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
  display: flex;
  justify-content: flex-end;
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0.5em 0;

  .discount {
    color: ${(props) => props.theme.color.gray};
    font-weight: normal;
    text-decoration: line-through;
    margin-right: 0.25em;
  }
`;

const Total = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.gray};
`;

export default SingleList;
