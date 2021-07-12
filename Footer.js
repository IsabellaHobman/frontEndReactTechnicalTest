import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.jpg';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
class ThisFooter extends React.Component{
  render(){
    return (
    <Navbar variant='dark'style={{backgroundColor:"#212d44"}}>
 <Container style={{display:"flex", padding:"5px"}}> {/* this gives some space between icons.*/}
   <Navbar.Brand href="#home" style={{gap:"5px", justifyContent:"flexStart"}}>
   <FontAwesomeIcon icon={faFacebookSquare} />
   <FontAwesomeIcon icon={faTwitter} />
   <FontAwesomeIcon icon={faInstagram} />
   <FontAwesomeIcon icon={faGooglePlus} />
   </Navbar.Brand>
   <Navbar.Collapse className="justify-content-end gap" style={{gap:"10px", color:"white"}}>
   <Navbar.Text>
     <b>Copyright © 2011 CCHS | Site Map </b>
   </Navbar.Text>
      <Navbar.Text>
        <b>Website design by me :)</b> {/* I couldn't find the logo for the previous designer. */}
      </Navbar.Text>
    </Navbar.Collapse>
 </Container>
 </Navbar>
  )
}
}
export default ThisFooter
