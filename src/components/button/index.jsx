import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
 border: none;
 outline: none;
 color: #DD127B;
 padding: 10px 2em;
 margin-right: auto;
 font-size: ${({ size }) => size ? size + "px" : "18px"};
 font-weight: 900;
 border-radius: 6px;
 word-wrap: break-word;
 background-color: #fff;
 cursor: pointer;
 transition: all 200ms ease-in-out;

 &:hover{
  background-color: #f3abce;
 }

&:focus {
 outline: none;
}
`;


export function Button(props) {
 const { size } = props;

 return <ButtonWrapper size={size}>{props.children}</ButtonWrapper>;
}