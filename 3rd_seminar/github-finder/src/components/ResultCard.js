import React from 'react';
import Styled from 'styled-components';

const CardWrap = Styled.div`
    .result_card{
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 390px;
        background-color: rgb(255, 232, 29);
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    }
    .result_image{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        padding: 5px;
        margin-top: 20px;
        border: 2px solid rgb(75, 0, 146);
    }
    .result_name{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5px;
    }
    .result_id{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .result_bio{
        width: 300px;
        text-align: center;
        margin: 20px auto;
    }
    .result_link{
        text-decoration: none;
        background-color: none;
        border: 2px solid rgb(75, 0, 146);
        border-radius: 5px;
        padding: 2px 5px;
        margin-bottom: 20px;
    }
    .result_link:hover{
        background-color: rgb(75, 0, 146);
        color: white;
    }
    .result_list{
        display: flex;
    }
    .list_title{
        width: 130px;
        font-size: 18px;
        background-color: rgb(122, 68, 173);
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #231E39;
        padding: 5px;
        color: white;
    }
`;

const ResultCard = ({ data }) => {
  return (
    <CardWrap>
      <div className="result_card">
        <img className="result_image" src={data.avatar_url} alt="" />
        <p className="result_name">{data.name}</p>
        <p className="result_id">{data.login}</p>
        <p className="result_bio">{data.bio}</p>
        <a
          className="result_link"
          href={data.html_url}
          alt=""
          target="_blank"
          rel="noreferrer"
        >
          Visit Github
        </a>
        <div className="result_list">
          <div className="list_title">Following: {data.following}</div>
          <div className="list_title">Followers: {data.followers}</div>
          <div className="list_title">Repos: {data.public_repos}</div>
        </div>
      </div>
    </CardWrap>
  );
};

export default ResultCard;
