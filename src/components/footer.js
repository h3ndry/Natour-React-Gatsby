import React from 'react'
import styled from 'styled-components'

export default function footer() {
  return (
    <FooterWrapper>
      <div className="footer-logo">
        <img alt="Full logo" src={require("../images/logo-green-2x.png")} />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer-navigation">
            <ul>
              <li><a href="#" >Company</a></li>
              <li><a href="#" >Contact us</a></li>
              <li><a href="#" >Carrers</a></li>
              <li><a href="#" >Privacy policy</a></li>
              <li><a href="#" >Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer-copyright">
            Built by <a href="#" className="footer-link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer-link">Advanced CSS and Sass</a>.
            Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
            and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 6.25rem 0;
  font-size: .875rem;
  color: #f7f7f7;
      
  .footer-logo {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5rem;
    width: 9.375rem;
    img {width: 100%}

    @media only screen and (max-width: 35em) {
      width: 6rem;
      margin-bottom: 2rem;
    }
  }

  .footer-navigation {
    border-top: 1px solid #777;
    padding-top: 1rem;
    display: inline-block;

    ul {
      list-style: none;
      li {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }      
  }

  .footer-link:link, 
  .footer-link:visited,
  .footer-navigation ul li a:link, 
  .footer-navigation ul li a:visited {
    color: #f7f7f7;
    background-color: #333;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all .2s;
  }

  .footer-link:hover,
  .footer-link:active,
  .footer-navigation ul li a:hover,
  .footer-navigation ul li a:active {
    color: #55c57a;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.4);
    transform: rotate(5deg) scale(1.3);
  }

    
`