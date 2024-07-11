import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Navlink  } from 'react-router-dom';
const NavbarNew = () => {
  return (
    <>

      <Navbar class="Navbar Navbar-expand-lg bg-primary Navbar-dark">
      <Container>
      <h1 className='text-center my-1 text-info'>FlipKart Store <br/>Explore Plus</h1>
        {/* <Navbar.Brand href="#home">FlipKart Store <br/>Explore plus</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href=" http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="  https://en.wikipedia.org/wiki/Flipkart">About</Nav.Link>
            {/* <Nav.Link href="#services">Services</Nav.Link> */}
            <Nav.Link href=" https://www.flipkart.com/helpcentre">Contact us</Nav.Link>
             {/* <Nav.Link href="#cart">Cart</Nav.Link>   */}
  <NavLink classname={'Nav-link'} to={'cart'}>Cart</NavLink> 
                 {/* <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1 ms-2"></i>Register</a>
                  */}
            
            </Nav>    -
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> 
  )
}

export default NavbarNew
