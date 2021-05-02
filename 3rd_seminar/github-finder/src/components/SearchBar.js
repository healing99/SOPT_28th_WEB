import React, { useState } from 'react';

const SearchBar = ({ getUser }) => {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(userName);
    setUserName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github ID를 입력하세요"
        value={userName}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
