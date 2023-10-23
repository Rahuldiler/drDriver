import React, { useState } from 'react'
import Layout from '../global/Layout'
import Input from '../reusable/Input';
import styled from 'styled-components';
import Form from '../reusable/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FormDiv = styled.form`
  min-width:500px;
  padding:2rem;
  border-radius:12px;
  background-color:#e3e3e3;
`
const Button = styled.button`
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
const UserLogin = () =>
{

  const [userDetails, setUserDetails] = useState({
    contact_number: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    contact_number: false,
    password: false,
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid)
    {
      try
      {
        const register = await axios.post("http://localhost:8000/drDriver/login", {
          contact_number: userDetails.contact_number,
          password: userDetails.password,
        });
        if (register.status === 200)
        {
          localStorage.setItem("userId", register._id) &&
            navigate("/opportunity")
        }
      } catch (error)
      {
        console.log(error);
      }
    }
  }
  
  const validateForm = () =>
  {
    const errors = {};
    let hasError = false;
    for (const key in userDetails)
    {
      if (!userDetails[key])
      {
        errors[key] = true;
        hasError = true;
      } else
      {
        errors[key] = false;
      }
    }
    setFormErrors(errors);

    return !hasError;
  }
  return (
    <Layout>
      <Form>
        <FormDiv onSubmit={(e) => handleSubmit(e)}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "cursive"
            }}

          >Login To user</h2>
          <Input
            inputValue={userDetails.contact_number}
            placeHolderValue={'Please enter contact number'}
            labelValue={'Contact Number:'}
            inputType={'tel'}
            hasError={formErrors.name}
            onChange={(value) =>
              setUserDetails({ ...userDetails, contact_number: value })
            }
          />
          <Input
            inputValue={userDetails.password}
            placeHolderValue={'Please enter password'}
            labelValue={'Password:'}
            inputType={'password'}
            hasError={formErrors.name}
            onChange={(value) =>
              setUserDetails({ ...userDetails, password: value })
            }
          />
          <Button type="button" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </FormDiv>
      </Form>
    </Layout>
  )
}

export default UserLogin