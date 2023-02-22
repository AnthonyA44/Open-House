import Carousel from "react-bootstrap/Carousel";
import "./SliderBefore.css";
import oh3 from "../../assets/openhouse1.png";
import oh2 from "../../assets/openhouse2.png";
import oh1 from "../../assets/openhouse3.png";
import oh4 from "../../assets/openhouse4.png";
import oh5 from "../../assets/openhouse5.png";

function SliderBefore() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div class="SliderBefore-obj">
          <img class="image1" src={oh1} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div>
            <h5>People interract with the world differently</h5>
            <p>
              People use technology in different ways, for a variety of reasons
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="SliderBefore-obj">
          <img class="image1" src={oh2} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <div>
            <h5>Let it drive your innovation</h5>
            <p>
              Inclusive design is about looking at things differently and taking
              a new perspective helps drive innovation
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="SliderBefore-obj">
          <img class="image1" src={oh3} alt="Third slide" />
        </div>
        <Carousel.Caption>
          <div>
            <h5>A social first approach is key</h5>
            <p>
              The social media says, 'this person can't do this task because of
              the way society built their surrounding environments'
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="SliderBefore-obj">
          <img class="image1" src={oh4} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div>
            <h5>Think big, start small, test often</h5>
            <p>
              Consider how all your customers and users interact with your
              business, services and products on a day-to-day basis{" "}
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="SliderBefore-obj">
          <img class="image1" src={oh5} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div>
            <h5>Start with talking to the people who matter</h5>
            <p>Inclusive design starts with challening your assumptions</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderBefore;
