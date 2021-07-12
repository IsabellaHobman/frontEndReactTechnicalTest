import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import * as  React from 'react';
import school from './assets/school.jpg'
import Button from 'react-bootstrap/Button';
class ThisCarousel extends React.Component{
render()
{
return (
<Carousel>
  <Carousel.Item >
    <Image
      src={school}
      className="firstSlide"
      style={{width:"100%", height:"25em"}} // this elimates the border and makes the picture a managable height.
    />
    <Carousel.Caption>
      <h3>All saints C OF E First School & Busy Bees Pre-school</h3>
      <Button style={{backgroundColor:"#005BC5"}} href="#">FIND OUT MORE</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      src={school}
      style={{width:"100%", height:"25em"}}
    />
    <Carousel.Caption>
    <h3>All saints C OF E First School & Busy Bees Pre-school</h3>
    <Button style={{backgroundColor:"#005BC5"}} href="#">FIND OUT MORE</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
    src={school}
    style={{width:"100%", height:"25em"}}
  />

    <Carousel.Caption>
    <h3>All saints C OF E First School & Busy Bees Pre-school</h3>
    <Button style={{backgroundColor:"#005BC5"}} href="#">FIND OUT MORE</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
}

export default ThisCarousel
