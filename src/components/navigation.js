import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

export default function Navigation() {

  let nav = useRef(null)

  const navOpen = () => { nav.classList.toggle('active') }

  return (
    <NavigationWrapper>
      <div className="navigation" ref={el => nav = el}>

        <div className="navigation-bg">&nbsp;</div>

        <div className="nav-icon" onClick={() => { navOpen() }}>
          <span>&nbsp;</span>
        </div>

        <nav className="nav">
          <ul>
            <li><a href="#"><span>01</span>About Natous</a></li>
            <li><a href="#"><span>02</span>Your benfits</a></li>
            <li><a href="#"><span>03</span>Popular tours</a></li>
            <li><a href="#"><span>04</span>Stories</a></li>
            <li><a href="#"><span>05</span>Book now</a></li>
          </ul>
        </nav>
      </div>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.div`


  .navigation {

    .navigation-bg {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      position: fixed;
      top: 4rem;
      right: 4rem;
      background-image: radial-gradient(#7ed56f, #28b485);
      z-index: 49;
      transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .nav-icon {
      background-color: #fff;
      height: 4rem;
      width: 4rem;
      position: fixed;
      top: 3.75rem;
      right: 3.75rem;
      border-radius: 50%;
      z-index: 60;
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
      text-align: center;
      cursor: pointer;

      span { 
        display: inline-block;
        position: relative;
        margin-top: 2rem;
        background-color: #333;
        width: 2rem;
        height: 2px;

        &::after,
        &::before {
          position: absolute;
          width: 2rem;
          height: 2px;
          background-color: #333;
          content: "";
          left: 0;
          transition: all .2s;
        }
        
        &::after {top: 8px}
        &::before {top: -8px}
      }

    }

    .nav {
      height: 100vh;
      width: 0;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 53;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      ul {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
        width: 100%;

        li {
          margin-bottom: .875rem;
          a {
            display: inline-block;
            font-size: 1.875rem;
            font-weight: 300;
            padding: .875rem 1.25rem;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
            background-size: 220%;
            transition: all .4s;
            span { margin-right: 1rem; display: inline-block}
          }

          a:hover {
            background-position: 100%;
            color: #55c57a;
            transform: translateX(.75rem);
          }
        }
      }
    }
  }

  .active {
    .navigation-bg {
      transform: scale(80);
    }
    .nav-icon {
      background-color: transparent;
      span {
        background-color: transparent;    
        &::after { top: 0; transform: rotate(135deg); background-color: #fff}
        &::before {top: 0; transform: rotate(-135deg); background-color: #fff}

      }
    }
    .nav {
      height: 100vh;
      width: 100vw;
      opacity: 1;
    }
  }
`
