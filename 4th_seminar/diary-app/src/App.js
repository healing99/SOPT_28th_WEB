import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);

  //Main 컴포넌트에서는 해당 월의 데이터만 가지고 있어야하므로 Main에 현재 연도와 월을 넘겨줌
  //ex) 2021년 5월에 해당하는 데이터만 가지고 오기 위함! 연도나 월이 변경된면 자동으로 API를 다시 요청
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          currMonth={month}
          setCurrYear={setYear}
          setCurrMonth={setMonth}
        />
        <Title />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route
            exact
            path="/diary"
            component={() => <Diary year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/edit/:id"
            component={() => <Diary year={year} month={month} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
