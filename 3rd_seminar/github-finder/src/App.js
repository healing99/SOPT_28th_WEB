import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
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
  const [userData, setUserData] = useState('');

  const getUser = async (name) => {
    const data = await getUserData(name);
    setUserData(data);
  };

  return (
    <MainWrap>
      <h1>Github Profile Finder</h1>
      <SearchBar getUser={getUser} />
      <ResultCard data={userData} />
    </MainWrap>
  );
}

export default App;
