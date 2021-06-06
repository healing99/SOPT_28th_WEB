import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";

const CardWrap = styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 642px;
    height: 219px;
    background-color: #efefef;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;

const Card = ({ data, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <CardInfo
        data={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
    </CardWrap>
  );
};

export default withRouter(Card);
