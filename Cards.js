import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import * as  React from 'react';
import rugby from './assets/rugby.jpg';
import piano from './assets/piano.jpg';
import ducks from './assets/ducks.jpg';
import sports from './assets/sports.jpg';
import classroom from './assets/classroom.jpg';
import book from './assets/book.jpg';
import children from './assets/child.jpg';
import uniform from './assets/uniform.jpg';
class ThisCards extends React.Component{
  render(){
    return (
      <div style = {{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "center", flexGrow:"1", flexBasis: "0"}}>
      <Card style={{width:"25%"  }}> {/* With four 25% width cards, we get a neat array like in the specification.*/}
  <Card.Img variant="top" src={rugby} style={{height: "80%"}} /> {/* otherwise, it will try to show as much of the picture as possible.*/}
  <Card.Body style={{backgroundColor: "#D90F5A" }}> {/* which means it won't line up.*/}
    <Card.Text style={{color:"White"}}>
PASTORAL SUPPORT
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width:"25%" }}> {/*looking back on this, it would've been useful to define a card with this initial values. */}
<Card.Img variant="top" src={piano} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#00E5A8" }}> {/* the colours manually needed implementing, hoewver.*/}
<Card.Text style={{color:"White"}}>
CALENDER
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:"25%" }}>
<Card.Img variant="top" src={ducks} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#30C4C9" }}>
<Card.Text style={{color:"White"}}>
BUSY BEES
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:"25%" }}>
<Card.Img variant="top" src={sports} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#FF6E27" }}>
<Card.Text style={{color:"White"}}>
NEWS
</Card.Text>
</Card.Body>
</Card>
<Card style={{width:"25%" }}>
<Card.Img variant="top" src={classroom} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#FFB608" }}>
<Card.Text style={{color:"White"}}>
CIRRICULUM
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:"25%" }}>
<Card.Img variant="top" src={book} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#4F2958" }}>
<Card.Text style={{color:"White"}}>
FIRST SCHOOL
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:"25%" }}>
<Card.Img variant="top" src={children} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#212D44" }}>
<Card.Text style={{color:"White"}}>
CHILDREN
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:"25%" }}>
<Card.Img variant="top" src={uniform} style={{height: "80%"}} />
<Card.Body style={{backgroundColor: "#88C100" }}>
<Card.Text style={{color:"White"}}>
PARENTS
</Card.Text>
</Card.Body>
</Card>
</div>
    )
  }
}
export default ThisCards
