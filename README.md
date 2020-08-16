# Codebnb
- [Demo](https://youtu.be/IhYx9S43GYw)
- [Review Blog](https://velog.io/@nowhhk/Codebnb-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A6%AC%EB%B7%B0#codebnb)


## Description
- 프론트엔드 2명, 백엔드 개발자 2명과 함께 에어비앤비 웹사이트의 UI와 기능을 직접 구현해보는 프로젝트
- 프로젝트 기간: 20.6.8 ~ 20.6.19 | 2주

## Tech Stack
- Front-End: React-hooks, React-Redux, Styled-Component
- Back-End: Django, MySQL [Repo](https://github.com/wecode-bootcamp-korea/Codebnb-backend)

## What did I do
메인 페이지
- Media Query 반응형 적용
- 유저가 입력한 검색값을 Redux를 사용하여 Global state로 관리하고,
- query parameters로 전달하여 숙소 리스트 페이지로 라우팅
로그인 페이지

모달 형식의 페이지 레이아웃 구현
- 구글과 페이스북의 소셜 API 이용하여 로그인 기능 구현
- local storage을 활용하여 사용자 정보(token) 관리

예약확인 페이지
- Local state에 따른 조건부 컴포넌트 렌더링
- 지난예약에 대해 리뷰와 평점을 백엔드 데이터에 POST하는 기능 구현

호스트등록 페이지
- Formdata 객체를 활용하여 사진 업로드 기능구현
- 다중 선택가능한 option의 state 관리
