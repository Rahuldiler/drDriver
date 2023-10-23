import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
   padding:0.6rem 2rem;
   background-color:#e3e3e3;
`
const ListWrap = styled.ul`
   padding-left:0rem;
   list-style:none;
`
const List = styled.li`
  padding:0.5rem;
  color:#333;
`
const Heading = styled.h2`
  color:#0059b1;
  border-bottom:2px dashed #0059b1;
  display:inline-block;
  font-size:18px;
  margin-bottom:0rem;
  font-weight:600;
`
const SpanTag = styled.span`
  a{
    text-decoration: none;
    font-weight:500;
    font-size:14px;
    color:#0059b1;

    &:hover {
      color:#2292ca;
      text-decoration: underline;
    }
  }
`
const Footer = () =>
{
  return (
    <>
      <FooterWrapper>
        <Container fluid className='px-0 mx-0'>
          <Row>
            <Col>
              <ListWrap>
                <List>
                  <Heading>Rahul Tech</Heading>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">Home</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">About</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">Contact</Link>
                  </SpanTag>
                </List>

              </ListWrap>


            </Col>
            <Col>
              <ListWrap className='text-center'>
                <List>
                  <Heading>Get In Touch</Heading>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">+91 8607013464</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">rahulydv3464@gmail.com</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">@rahul_diler786</Link>
                  </SpanTag>
                </List>

              </ListWrap>


            </Col>
            <Col>
              <ListWrap className='text-end'>
                <List>
                  <Heading>UseFul Link</Heading>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">Home</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">About</Link>
                  </SpanTag>
                </List>
                <List>
                  <SpanTag>
                    <Link to="/">Contact</Link>
                  </SpanTag>
                </List>

              </ListWrap>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </>
  )
}

export default Footer