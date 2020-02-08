import React from 'react'
import styled from 'styled-components'
import video1 from '../images/video.mp4'
import video2 from '../images/video.webm'
import { ButtonB } from './Buttons'

export default function Stories() {
  return (
    <StoriesWrapper>
      <div className="bg-video">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="title">
        <h2> We make people genuinely happy </h2>
      </div>


      <div className="row">
        <div className="story">
          <figure className="story-shape">
            <img src={require('../images/nat-8.jpg')} alt="Person on a tour" />
            <figcaption>Mary Smith</figcaption>
          </figure>
          <div className="story-text">
            <h3>I had the best week ever with my family</h3>
            <p>Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
              ducimus quam nisi exercitationem Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem
              omnis earum qui. omnis earum qui. </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story-shape">
            <img src={require('../images/nat-9.jpg')} alt="Person on a tour" />
            <figcaption>Jack Wilson</figcaption>
          </figure>
          <div className="story-text">
            <h3>WOW! My life is completely different now</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. </p>
          </div>
        </div>
      </div>

      <ButtonB href='#' text='Read all stories &rarr;' />

    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.section`
  position: relative;
  padding: 9.375rem 0;
  text-align: center;
      
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .15;
    overflow: hidden;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .story {
    width: 75%;
    margin: 0 auto;
    box-shadow: 0 1.875rem 3.75rem rgba(0,0,0,0.1);
    background-color: rgba(255,255,255,0.6);
    border-radius: 3px;
    padding: 3rem;
    text-align: left;
    padding-left: 5.625rem;
    font-size: 1rem;
    transform: skewX(-12deg);

    

    figure {
      width: 9.375rem;
      height: 9.375rem;
      float: left;
      -webkit-transform: translateX(-3rem) skewX(12deg);
      transform: translateX(-1.875rem) skewX(12deg);
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      clip-path: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      border-radius: none;

      img {
        height: 100%;
        transform: translate(-2rem, -1rem) scale(1.4);
        backface-visibility: hidden;
        transition: all .5s;
      }

      figcaption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: #fff;
        text-transform: uppercase;
        font-size: 1rem;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
      }
    }

    &-text { transform: skewX(12deg)}

    &:hover  {
      figcaption {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      figure img {
        transform: translateX(-2.5rem) scale(1);
        filter: blur(3px) brightness(80%);
      }
    }

    @media only screen and (max-width: 35em) {
      transform: skewX(0deg);
      padding: 2rem;
      width: 100%;
      figure {transform: translateX(-1rem) skewX(0)}
      .story-text { transform: skewX(0)}
    }
  }
      
`