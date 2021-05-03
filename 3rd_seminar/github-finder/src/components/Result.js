import React from 'react';
import ResultCard from './ResultCard';

const Result = ({ userData }) => {
  const { status, data } = userData;
  switch (status) {
    case 'idle':
    default:
      return <div></div>;

    case 'pending':
      return <div style={{ color: 'white' }}>Loading...</div>;

    case 'resolved':
      return <ResultCard data={data} />;

    case 'rejected':
      return <div style={{ color: 'white' }}>User Not Found</div>;
  }
};

export default Result;
