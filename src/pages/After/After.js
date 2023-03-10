import "./After.css";
import { Link } from "react-router-dom";
// import T from "../../txt.json";
import SliderAfter from "../../components/SliderAfter/SliderAfter";
import MenuAfter from "../../components/MenuAfter/MenuAfter";
import deloitteIcon from "../../assets/Deloitte-Digital.jpeg";

const After = () => {
  // let exampleText = T.exampleText;
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
  };
  const options = [
    { value: "green", label: "Green", index: 1 },
    { value: "blue", label: "Blue", index: 2 },
    { value: "red", label: "Red", index: 3 },
    { value: "yellow", label: "Yellow", index: 4 },
    { value: "orange", label: "Orange", index: 5 },
    { value: "pink", label: "Pink", index: 6 },
    { value: "purple", label: "Purple", index: 7 },
    { value: "grey", label: "Grey", index: 8 },
  ];
  return (
    <>
      <div class="header">
        <img class="logo" src={deloitteIcon} alt="doggo"></img>
        <nav>
          <ul class="nav">
            <li>
              <div class="nav-after">
                <Link tabIndex={0} style={linkStyle} to="/">
                  Inaccessible Experience
                </Link>
              </div>
            </li>
            <li>
              <div class="nav-after-active">
                <Link tabIndex={0} style={linkStyle} to="/after">
                  Accessible Experience
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container">
        <h1 class="heading"> Accessible Experience</h1>
        <div class="layout-after">
          <div class="section-after">
            <p>
              Accessible web pages refer to web pages that can be easily used by
              everyone, including those with disabilities. This includes
              features such as high contrast mode, large text options, and
              alternative text descriptions for images. <br /> <br /> Accessible
              web pages also use proper coding techniques to ensure
              compatibility with assistive technologies such as screen readers.{" "}
              <br /> <br />
              Making web pages accessible not only benefits individuals with
              disabilities, but also makes the website easier to use for
              everyone, improving the user experience for all. Learn more at
              <a
                class="link-text"
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              >
                {" "}
                w3.org
              </a>
            </p>
          </div>
          <div class="section-after-2">
            <SliderAfter></SliderAfter>
          </div>
        </div>
        {/* Contact Us Form */}
        <h2 class="form-heading">Contact Us</h2>
        <div class="layout-after-2">
          <div class="menu">
            <MenuAfter
              isMulti
              placeHolder="Select Colours"
              options={options}
              onChange={(value) => console.log(value)}
            />
          </div>
          <form>
            <div class="form-input-after">
              <div class="field-container-after">
                <label class="field-container-after">
                  First Name
                  <input class="field-after" type="text" name="name" />
                </label>
              </div>
              <div class="field-container-after-2">
                <label class="field-container-after-2">
                  Last Name
                  <input class="field-after" type="text" name="name" />
                </label>
              </div>
            </div>

            <div class="text-container-after">
              <label for="story">
                How does your organization design for accessibility?
              </label>
              <textarea
                id="story"
                name="story"
                class="text-area-after"
              ></textarea>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default After;
