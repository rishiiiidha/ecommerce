import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import Logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar className='bg-gray-900' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand className='flex text-center'>
              <img src={Logo} alt="" className='h-content-fit w-8 mx-2' />
              ECommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <LinkContainer to="/cart">
                <Nav.Link className='flex items-center p-2'><FaShoppingCart /> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className='flex items-center p-2'><FaUser /> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header