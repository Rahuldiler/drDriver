import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavbar = styled(Navbar)`
   padding:0.6rem 2rem;
   background-color:#e3e3e3;

  .navbar-brand {
    color: #2292ca;
    font-weight:bold;
    font-size:16px;
    font-family:"Sans-serif";
  }

  .nav-link {
    text-decoration: none;
    font-weight:500;
    font-size:16px;
    margin:0rem 1rem;

    &:hover {
      color:#2292ca;
      text-decoration: underline;
    }
  }
`;
function Header()
{
    return (
        <StyledNavbar expand="lg">
            <Container fluid className='px-0 mx-0'>
                <Navbar.Brand as={Link} to="/">MERN DEVELOPER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="ms-auto" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="ms-auto" to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="ms-auto" to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} className="ms-auto" to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} className="ms-auto" to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}

export default Header;