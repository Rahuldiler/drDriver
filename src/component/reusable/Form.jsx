import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:750px;
  margin:2rem 0rem;
`
const Form = ({children}) => {
  return (
      <FormWrapper>
          {children}
      </FormWrapper>
  )
}

export default Form