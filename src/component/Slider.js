// import {Link,Route,Routes} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import one from '../slider/one.jpg';
import two from '../slider/two.jpg';
import three from '../slider/three.jpg';



export function Slider() {
  return (

    <>

      <Container>
        <br/>
        <Row >
          <Col sm={9}>
            <Carousel className='pics slider_pic'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={one}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>George Gobal</h3>
                  <p>If it waren't for electricity we'd be watching television by candle light.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={two}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={three}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>



          <Col sm={3}>
          

          </Col>

        </Row>

      </Container>

    </>




  );
}