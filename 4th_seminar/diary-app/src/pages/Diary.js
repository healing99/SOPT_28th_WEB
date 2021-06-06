import React, { useState, useEffect } from "react";
import Card from "../components/diary/Card";
import { getCardData } from "../lib/api";
import { withRouter } from "react-router-dom";

const Diary = ({ year, month, match }) => {
  const id = match.params.id;
  const [diaryData, setDiaryData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id))); //선택한 특정 다이어리 정보
      setRawData(data);
    })();
  }, [id]);

  return (
    diaryData && (
      <Card data={diaryData} rawData={rawData} year={year} month={month} />
    )
  );
};

export default withRouter(Diary);
