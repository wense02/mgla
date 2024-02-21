import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import {} from "../buttonlink";

const MainNavContainer = styled.div`
 width: 100%;
 height: 55px;
 display: flex;
 padding: 0 1.5em;
 align-items: center;
 background-color: #dd127b;
 justify-content: space-between;
`;

const AnchorLink = styled.a`
 font-size: 20;
 color: #fff;
 cursor: pointer;
 text-decoration: none;
 outline: none;
 transition: all 200ms ease-in-out;
 font-weight: 400;
 line-height: 50;
 word-wrap: break-word;

 &:hover {
  filter: contrast(0.6);
 }
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
`; 

const AccessibilityContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 1.4em;
`;

export function Navbar(props) {
  return (
   <><MainNavContainer>
      Already have an account?
      <buttonLink>Login</buttonLink>
       <AnchorLink>+(234)-806-719-1062</AnchorLink> 
   </MainNavContainer>
   <NavbarContainer>
    <BrandLogo />
    <AccessibilityContainer>
     <Button size={17}>Enroll</Button>
    </AccessibilityContainer>
   </NavbarContainer></> 
  );
}