import React from 'react'
import styled from 'styled-components'

export default function featureCard({ icon, title, text }) {
  return (
    <CardWrapper className='col-1-of-4' >
      <div className="feature-box">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </CardWrapper >
  )
}


const CardWrapper = styled.div`
  float: left;
  &:not(:last-child) {
    margin-right: var(--gutter-horizontal);
    @media only screen and (max-width: 56.25em) {
      margin-right: 0;
      margin-bottom: var(--gutter-vertical-small);
    }
  }
  @media only screen and (max-width: 56.25em) {
    width: 100% !important;
  }

  .feature-box {
    background-color: rgba(255,255,255,0.8);
    font-size: 1rem;
    padding: 1.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
    transition: -webkit-transform .3s;
    transition: transform .3s;

    &:hover {
      transform: translateY(-1rem) scale(1.03);
    }

    .icon {
      font-size: 3.75rem;
      margin-bottom: 5px;
      display: inline-block;
      background-image: linear-gradient(to right, #7ed56f, #28b485);
      -webkit-background-clip: text;
      color: transparent;
    }

    p {
      font-size: .875rem
    }
  }


`