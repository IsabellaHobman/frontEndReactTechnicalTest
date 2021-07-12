import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.jpg';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnet } from '@fortawesome/free-solid-svg-icons'
class ThisNavbar extends React.Component{
render() {
  return (
    <Navbar variant='dark'style={{backgroundColor:"#212d44"}}>
 <Container style={{display:"flex", padding:"5px"}}>
   <Navbar.Brand href="#home">
     <img
       src={logo}
       width="40"
       height="40"
       className="d-inline-block align-top"
     />
   </Navbar.Brand>
   <Navbar.Collapse className="justify-content-end gap" style={{gap:"10px", color:"white"}}>
      <Navbar.Text>
        <b>01782 791234</b>
      </Navbar.Text>
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faMagnet} />
    </Navbar.Collapse>
 </Container>
 </Navbar>
  )
}
}
export default ThisNavbar
