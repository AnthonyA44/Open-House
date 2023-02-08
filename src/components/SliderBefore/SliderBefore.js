import Carousel from 'react-bootstrap/Carousel';
import './SliderBefore.css';
import oh1 from '../../assets/openhouse4.jpg'
import oh2 from '../../assets/openhouse5.jpg'
import oh3 from '../../assets/openhouse1.jpeg'

function SliderBefore() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div class='SliderBefore-obj'>
          <img
            class="image1"
            src={oh1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class='SliderBefore-obj'>
          <img
            class="image1"
            src={oh2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class='SliderBefore-obj'>
        <img
          class="image1"
          src={oh3}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderBefore;