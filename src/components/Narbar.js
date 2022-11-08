import React from "react";

import {Navbar,Nav,Container} from "react-bootstrap"
import {Link} from 'react-router-dom'


function Navbar1()  {

  return(

    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      < Nav className="me-auto">
      <Link  className="nav-link"  to='/' >Home</Link>
        <Link  className="nav-link"  to='/about' >about</Link>
        <Link  className="nav-link"  to='/events' >event</Link>
        <Link  className="nav-link"  to='/form' >form</Link>
       
      </Nav>
    </Container>
  </Navbar>
 );
  }
  export default  Navbar1
