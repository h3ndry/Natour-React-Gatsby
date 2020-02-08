import React from 'react'
import styled from 'styled-components'
import { ButtonA } from './Buttons'

export default function form() {
  return (
    <FormWrapper>
      <div className="row">
        <div className="booking-form">
          <div className="form">
            <form action="#" >
              <div className="title">
                <h2>Start booking now</h2>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Full name" id="name" required />
                <label htmlFor="name" >Full name</label>
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email address" id="email" required />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-group">
                <div className="radio-group">
                  <input type="radio" className="form__radio-input" id="small" name="size" />
                  <label htmlFor="small" className="radio-label">
                    <span></span> Small tour group
                  </label>
                </div>

                <div className="radio-group">
                  <input type="radio" id="large" name="size" />
                  <label htmlFor="large" >
                    <span></span>Large tour group</label>
                </div>
              </div>

              <div className="form-group">
                <ButtonA green text='Next step &rarr;' href='#' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormWrapper>
  )
}

const FormWrapper = styled.section`
  padding: 9.375rem 0;
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);

  .booking-form {
    background-image: linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 50%, transparent 50%),url(${require('../images/nat-10.jpg')});
    background-size: cover;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.2);

    .form {
      width: 50%;
      padding: 3.75rem;

      .title {
        margin-bottom: 2rem;
      }

      .form-group {
        &:not(:last-child) { margin-bottom: 1.25rem;}

        input {
          font-size: 1rem;
          font-family: inherit;
          color: inherit;
          padding: 1rem 1.5rem;
          border-radius: 2px;
          background-color: rgba(255,255,255,0.5);
          border: none;
          border-bottom: 3px solid transparent;
          width: 90%;
          display: block;
          transition: all .3s;

          &:placeholder-shown+label {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-3.75rem);
          }

          &:focus {  
            outline: none;
            box-shadow: 0 1rem 2rem rgba(0,0,0,0.1);
            border-bottom: 3px solid #55c57a;

            &:invalid {border-bottom: 3px solid #ff7730;}
          }

        }

        label {
          margin-left: 1.5rem;
          margin-top: 7px;
          display: block;
          -webkit-transition: all .3s;
          transition: all .3s
        }

      }

      .radio-group {
        display: inline-block;
         margin-bottom: 1.25rem;
        input {
          display: none;

          &:checked ~ label span::after { opacity: 1 !important}
        }

        label {
          cursor: pointer;
          position: relative;
          padding-left: 2rem;

          span {
            height: 1.5rem;
            width: 1.5rem;
            border: 3px solid #55c57a;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 3px;
            &::after {
              content: "";
              display: block;
              height: .75rem;
              width: .75rem;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #55c57a;
              opacity: 0;
              transition: opacity .2s;
            }
          }
        }
      }
    }


    @media only screen and (max-width: 56.25em) {
      background-image: linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%),url(${require('../images/nat-10.jpg')});
      .form {
        width: 100%;
        padding: 1rem;

        .form-group input { width: 100% }
      }
    }
  }  
`