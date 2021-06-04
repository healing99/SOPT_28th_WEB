import React, { useEffect, useState } from "react";
import Card from "../components/main/Card";
import styled from "styled-components";
import { getCardData } from "../lib/api";
import NewCard from "../components/main/NewCard";
import { withRouter } from "react-router-dom";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month, history }) => {
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
          return (
            <Card
              key={idx}
              props={data}
              onClickFunc={() => history.push(`/diary/${data.id}`)}
            />
          );
        })}
      <NewCard
        year={year}
        month={month}
        rawData={rawData}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
};

export default withRouter(Main);
