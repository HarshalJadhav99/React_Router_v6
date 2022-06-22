import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         {/* <Nav.Link> <NavLink className="Navbar_link" to='/' style={({isActive})=>{return{backgroundColor:isActive?'green':'red'}}}>Home</NavLink></Nav.Link> */}
         <Nav.Link> <NavLink className="Navbar_link" to='/'>Home</NavLink></Nav.Link>

         <Nav.Link> <NavLink className="Navbar_link" to='/about/harshal/jadhav'>About</NavLink></Nav.Link>
         <Nav.Link> <NavLink className="Navbar_link" to='/contact'>Contact</NavLink></Nav.Link>
         <Nav.Link> <NavLink className="Navbar_link" to='/service'>Service</NavLink></Nav.Link>
         <Nav.Link> <NavLink className="Navbar_link" to='/login'>Login</NavLink></Nav.Link>

         {/* <Nav.Link> <NavLink className="Navbar_link" to='/user/anil'>Anil</NavLink></Nav.Link>
         <Nav.Link> <NavLink className="Navbar_link" to='/user/harshal'>harshal</NavLink></Nav.Link> */}

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header