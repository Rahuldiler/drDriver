import React from 'react'
import styled from 'styled-components'

const ButtonSection = styled.div`
  display:flex;
  justify-content:center;
`
const ButtonWrapper = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family:monospace;
  font-size: 16px;
  letter-spacing:1px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px;
  margin:2rem 0rem ;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;


  &:active,
  &:hover {
  outline: 0;
  }

`
const Button = ({ buttonValue,type }) =>
{
    return (
        <ButtonSection>
        <ButtonWrapper type={type}>
                {buttonValue}
            </ButtonWrapper>
        </ButtonSection>

    )
}

export default Button