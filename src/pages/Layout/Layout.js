import { Outlet } from "react-router-dom";
import "./Layout.css";
import footerImg1 from "../../assets/Footer.svg";
import footerImg2 from "../../assets/Footer2.svg";

const Layout = () => {
  return (
    <>
      <Outlet />
      <div class="footer">
        <img class="footer-img-1" src={footerImg1} alt="colors"></img>
        <div class="footer-section-2">
          <img class="footer-img-2" src={footerImg2} alt="colors"></img>
          <p class="land">
            We acknowledge that Deloitte offices reside on traditional, treaty,
            and unceded territories on what is now known as Canada but still
            often referred to by some Indigenous peoples as part of Turtle
            Island. We acknowledge this land is still home to many First
            Nations, Inuit, and Métis peoples. We are all Treaty people.
          </p>
          <div class="footer-info">
            <div class="location">
              <p class="info-heading">We're Located at</p>
              <p>
                <b>D. Studio </b>
                <br />
                8 Adelaide Street West <br />
                5th Floor <br />
                Suite 200 <br />
                Toronto, ON M5H 0A9
              </p>
            </div>
            <div class="contacts">
              <p class="info-heading">Contact Us</p>
              <p>
                <b>Marilyn Whittingham</b>
                <br />
                <u>mwhittingham@deloitte.ca</u>
              </p>
              <br />
              <p>
                <b>Paul Jurkovic</b>
                <br />
                <u>pjurkovic@deloitte.ca</u>
              </p>
            </div>
            <div class="more">
              <p class="info-heading">Learn More</p>
              <p>
                <u>Our Microsite</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
