import React, { useState } from 'react';
import Styled from 'styled-components';

const SearchBarWrap = Styled.div`
    input{
        padding: 5px;
        width: 310px;
        height: 30px;
        border: none;
        margin: 10px;
    }

    input::placeholder{
        color:  rgb(75, 0, 146);
    }
`;

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
    <SearchBarWrap>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Github ID를 입력하세요"
          value={userName}
          onChange={handleChange}
        />
      </form>
    </SearchBarWrap>
  );
};

export default SearchBar;
