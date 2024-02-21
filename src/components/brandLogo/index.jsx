import React from "react";
import styled from "styled-components";

import LogoImg from "../../Images/mla.png"


const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 45px; 
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "166px" : "7em")};
  height: ${({ size }) => (size ? size + "69px" : "7em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

export function BrandLogo(props) {
 const { logoSize } = props;

  return (
    <BrandLogoContainer>
      <LogoImage size={logoSize}>
       <img src={LogoImg} alt="" />
      </LogoImage>
    </BrandLogoContainer>
  );
}