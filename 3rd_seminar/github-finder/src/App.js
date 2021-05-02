import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import { getUserData } from './lib/api/githubAPI';

function App() {
  useEffect(() => {
    getUserData('healing99');
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <SearchBar />
      <ResultCard />
    </>
  );
}

export default App;
