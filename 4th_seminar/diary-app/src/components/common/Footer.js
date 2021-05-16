import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  .footer {
    height: 91px;
    color: #cea0e3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      Copyright&copy; 2021. BE SOPT Web part. All rights reserved.
    </FooterWrap>
  );
};

export default Footer;
