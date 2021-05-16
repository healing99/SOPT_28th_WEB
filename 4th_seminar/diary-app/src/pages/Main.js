import React, { useEffect, useState } from "react";
import Card from "../components/main/Card";
import styled from "styled-components";
import { getCardData } from "../lib/api";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month }) => {
  const [userData, setUserData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      {userData &&
        userData.map((data, idx) => {
          return <Card key={idx} props={data} />;
        })}
    </MainWrap>
  );
};

export default Main;
