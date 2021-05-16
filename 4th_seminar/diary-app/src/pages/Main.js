import React, { useState } from "react";
import Card from "../components/main/Card";
import styled from "styled-components";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = () => {
  //서버에서 API요청 결과값 받아오기 전에 먼저 dummy data로 구현
  const [userData, setUserData] = useState({
    id: 1,
    date: 20210501,
    title: "다이어리 제목입니다",
    image: "",
    weather: "맑음",
    tags: ["태그1", "태그2"],
  });
  return (
    <MainWrap>
      <Card props={userData} />
    </MainWrap>
  );
};

export default Main;
