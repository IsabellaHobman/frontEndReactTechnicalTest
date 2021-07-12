import * as React from 'react';
import logo from './assets/logo.jpg';
import Container from 'react-bootstrap/Container';
import child from './assets/child.jpg';
import './index.css';
class Content extends React.Component{
  render() {
    return (
      <div style={{ height: "100%", backgroundColor:"#000000", color:"White", display:"flex", flexDirection:"Row"}}>
      <Container style={{maxWidth:"35%"}}>
      <h1>USEFUL LINKS</h1>
      <ul style={{display:"flex", flexDirection:"column", flexWrap:"wrap", height:"200px" }}>
      <li>
      Home
      </li>
      <li>
      Cirriculum
      </li>
      <li>
      Academic
      </li>
      <li>
      Pastoral Support
      </li>
      <li>
      Extra cirricular
      </li>
      <li>
      Admissions
      </li>
      <li>
      Parents
      </li>
      <li>
      Latest News
      </li>
      <li>
      Calender Events
      </li>
      <li>
      Galleries
      </li>
      <li>
      Galleries
      </li>
      <li>
      Clubs & Teams
      </li>
      <li>
      Communication
      </li>
      <li>
      Policies
      </li>
      <li>
      Sitemap
      </li>
      </ul>
      </Container>
      <Container style={{maxWidth:"35%"}}>
      <h1>USEFUL LINKS</h1>
      <ul style={{display:"flex", flexDirection:"column", flexWrap:"wrap", height:"200px" }}>
      <li>
      Home
      </li>
      <li>
      Cirriculum
      </li>
      <li>
      Academic
      </li>
      <li>
      Pastoral Support
      </li>
      <li>
      Extra cirricular
      </li>
      <li>
      Admissions
      </li>
      <li>
      Parents
      </li>
      <li>
      Latest News
      </li>
      <li>
      Calender Events
      </li>
      <li>
      Galleries
      </li>
      <li>
      Galleries
      </li>
      <li>
      Clubs & Teams
      </li>
      <li>
      Communication
      </li>
      <li>
      Policies
      </li>
      <li>
      Sitemap
      </li>
      </ul>
      </Container>
      <Container style = {{maxWidth:"30%"}}>
      <img src ={child}
      style={{height:"100%", width:"100%", justifyContent:"flex-end"}}/>

      </Container>
      </div>
    )
  }
}
export default Content
