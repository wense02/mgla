import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer"

import TopSectionBackgroundImg from "../../Images/background_image.png";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
 width: 100%;
 height: 700px;
 color: white;
 background: url(${TopSectionBackgroundImg});
 background-position: 0px -35px;
 background-size: cover;
`;

const BackgroundFilter = styled.div`
 width: 100%;
 height: 100%;
 background-image: linear-gradient(to left, rgba(253,0,0,0), rgba(228, 67, 188, 0.9));
 display: flex;
 flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
 width: 100%;
 height: 100;
 display: flex;
 align-items: left;
 margin-left: 100px;
 flex-direction: column;
`;

const SloganText = styled.h2`
 margin: 0;
 line-height: 1.4;
 color: #fff;
 font-weight: 900;
 font-size: 35px;
 text-align: left;
 word-wrap: break-word;
`;

const UnderText = styled.h2`
 margin: 0;
 line-height: 2.4;
 color: #fff;
 font-weight: 500;
 font-size: 17px;
 text-align: left;
 word-wrap: break-word;
`;

export function TopSection(props) {
 const { children } = props;

 return <TopSectionContainer>
  <BackgroundFilter>
   {children}
   <TopSectionInnerContainer>
     <Marginer direction="vertical" margin={275} />
     <SloganText>Learn the latest digital <br/> skills for tomorrow's jobs</SloganText>
     <UnderText>The fastest most effective training to get future ready</UnderText>
     <Marginer direction="vertical" margin={15} />
     <Button>Explore courses</Button>
   </TopSectionInnerContainer>
  </BackgroundFilter>
 </TopSectionContainer>
}