import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


import BackgroundImage from '../images/hero-small.jpg'
import Logo from '../images/logo-white.png'
import Button from './Buttons'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="logo-box">
      <img src={Logo} alt="Logo" />
    </div>

    <div className="text-box">
      <h1>
        <span className="main">Outdoors</span>
        <span className="sub">is where life happens</span>
      </h1>

      <Button
        href='#section-tours'
        text='Discover our tours'
      />
    </div>
  </HeaderWrapper>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


const HeaderWrapper = styled.header`

  @keyframes moveInLeft {
    0% { opacity: 0; transform: translateX(-10rem); }
    80% { transform: translateX(1rem);}
    100% { opacity: 1; transform: translate(0); }
  }

  @keyframes moveInRight {
    0% { opacity: 0; transform: translateX(10rem);}
    80% { transform: translateX(-1rem);}
    100% { opacity: 1; transform: translate(0);}
  }

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 95vh;
  min-height: 50vh;
  background-image: linear-gradient(to right bottom, rgba(126,213,111,0.8),
      rgba(40,180,133,0.8)),url(${BackgroundImage});
  background-size: cover;
  background-position: top;
  position: relative;

  .logo-box {
    position: absolute;
    height: 2.1875rem;
    top: 2.5rem;
    left: 2.5rem;

    img { height: 100% }
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      color: #fff;
      text-transform: uppercase;
      backface-visibility: hidden;
      margin-bottom: 3.75rem;

      span {
        display: block;
        font-weight: 400;
      }
  
      .main {
        animation: moveInLeft 1s ease-out;
        font-size: 3rem;
        line-height: 1.7;
        letter-spacing: 2.1875rem;
      } 

      .sub {
        font-size: 1rem;
        letter-spacing: 1rem;
        animation: moveInRight 1s ease-out
      }
    }
  }
`