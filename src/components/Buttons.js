import React from 'react'
import styled from 'styled-components'

export function ButtonA({ href, text }) {
  return (
    <ButtonWrapperA href={href}>
      {text}
    </ButtonWrapperA>

  )
}

export function ButtonB({ href, text }) {
  return (
    <ButtonWrapperB href={href}>
      {text}
    </ButtonWrapperB>

  )
}


const ButtonWrapperA = styled.a`

@keyframes moveInBottom {
  0% { opacity: 0; transform: translateY(3rem); }
  100% { opacity: 1; transform: translate(0); }
}

text-transform: uppercase;
text-decoration: none;
padding: .875rem 2rem;
display: inline-block;
border-radius: 2rem;
transition: all .2s;
position: relative;
font-size: .875rem;
border: none;
cursor: pointer;
background-color: #fff;
color: #777;
animation: moveInBottom .5s ease-out .75s backwards;

&::after {
  background-color: #fff;
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
}

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);

  &::after {
    transform: scaleX(1.2) scaleY(1.4);
    opacity: 0;
  }

}
`

const ButtonWrapperB = styled.a`
  font-size: 1rem;
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  transition: all .2s;

  &:hover {
    background-color: #55c57a;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }
`