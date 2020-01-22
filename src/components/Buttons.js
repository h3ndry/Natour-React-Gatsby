import React from 'react'
import styled from 'styled-components'

export default function Buttons({ href, text }) {
  return (
    <ButtonWrapper href={href}>
      {text}
    </ButtonWrapper>

  )
}


const ButtonWrapper = styled.a`

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