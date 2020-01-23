import React from 'react'
import styled from 'styled-components'
import { ButtonA } from './Buttons'


import Img from "gatsby-image"


export default function ToursCard({ img, title, list, price }) {

  return (
    <ToursCardWrapper className="col-1-of-3">
      <div className="card">
        <div className=" card-side card-front">
          <div className="picture">
            <div className="overlay"></div>
            <Img fluid={img} />
          </div>
          <h4> <span>{title}</span> </h4>
          <div className="details">
            <ul>
              {list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="card-side card-back">
          <div className="card-cta">
            <div className="price-box">
              <p className="price-only">Only</p>
              <p className="price-value">${price}</p>
            </div>
            <ButtonA text='Book now!' />
          </div>
        </div>
      </div>
    </ToursCardWrapper>
  )
}

const ToursCardWrapper = styled.div`

  float: left;
  position: relative;
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

  .card {
    -webkit-perspective: 150rem; 
    perspective: 150rem;
    -moz-perspective: 150rem;
     
    
    &-side {
      height: 32.5rem;
      -webkit-transition: all .8s ease;
      transition: all .8s ease;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 3px;
      overflow: hidden;
      -webkit-box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
      box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
    }
    &-front {
      background-color: #fff;

      .picture {
        background-size: cover;
        position: relative;
        height: 14.375rem;
        /* mix-blend-mode: screen; */
        /* background-blend-mode: screen; */
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
          mix-blend-mode: screen;
          z-index: 20;

        }
      }

      h4 {
        font-size: 1.75rem;
        font-weight: 300;
        text-transform: uppercase;
        text-align: right;
        color: #fff;
        position: absolute;
        top: 7.5rem;
        right: 1rem;
        width: 75%;

        span {
          background-image: linear-gradient(to right bottom, rgba(255,185,0,0.85), rgba(255,119,48,0.85));
          padding: .875rem 1rem;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
      }
      .details {
        padding: 1.875rem;

        ul {
          list-style: none;
          width: 80%;
          margin: 0 auto;

          li {
            text-align: center;
            font-size: .875rem;
            padding: .75rem;

            &:not(:last-child) { border-bottom: 1px solid #eee }
          }
        }
      }
    }

    .card-back {
      position: absolute;
      transform: rotateY(180deg);
      background-image: linear-gradient(to right bottom, #ffb900, #ff7730);

      .card-cta {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 90%;
        text-align: center;

        .price-box {
          text-align: center;
          color: #fff;
          margin-bottom: 5rem;
          .price-only { font-size: 1.4rem; text-transform: uppercase; }
          .price-value { font-size: 3.75rem; font-weight: 100;}
        }
      }
    }


  }

  .card:hover {
    .card-front {
      transform: rotateY(-180deg);
    }

    .card-back {
      transform: rotateY(0);
    }
  }


  &:nth-of-type(2) {
    .overlay {
      background-image: linear-gradient(to right bottom, #7ed56f, #28b485) !important;
    }

    h4 span {
      background-image: linear-gradient(to right bottom, #7ed56f, #28b485)
    }

    .card-back {
     background-image: linear-gradient(to right bottom, #7ed56f, #28b485) !important;
    }
  }

  &:nth-of-type(3) {
    .overlay {
      background-image: linear-gradient(to right bottom, #2998ff, #5643fa) !important;
    }

    h4 span {
      background-image: linear-gradient(to right bottom, #2998ff, #5643fa)
    }

    .card-back {
     background-image: linear-gradient(to right bottom, #2998ff, #5643fa) !important;
    }

  }

  
`