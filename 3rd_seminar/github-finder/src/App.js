import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import { getUserData } from './lib/api/githubAPI';
import Styled from 'styled-components';

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(75, 0, 146);
  height: 100vh;
  width: 100vw;

  h1{
    color:  rgb(250, 228, 32);
  }
`;

function App() {
  const [userData, setUserData] = useState({
    status: 'idle',
    data: null,
  });

  const getUser = async (name) => {
    setUserData({ ...userData, status: 'pending' });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error; //data가 null이면 에러 발생시켜서 catch로 넘어감
      setUserData({ status: 'resolved', data: data });
    } catch (e) {
      setUserData({ status: 'rejected', data: null });
      console.log(e);
    }
  };

  return (
    <MainWrap>
      <h1>Github Profile Finder</h1>
      <SearchBar getUser={getUser} />
      <Result userData={userData} />
    </MainWrap>
  );
}

export default App;
