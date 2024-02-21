import React from "react";
import styled from "styled-components";

const ButtonLink = styled.button`
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


export function Button(props) {
 const { size } = props;

 return <ButtonLink size={size}>{props.children}</ButtonLink>;
}