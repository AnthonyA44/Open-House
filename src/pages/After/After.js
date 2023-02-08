import "./After.css";
import { Link } from "react-router-dom";
import T from "../../txt.json";
import SliderAfter from "../../components/SliderAfter/SliderAfter";
import MenuAfter from "../../components/MenuAfter/MenuAfter";

const After = () => {
  let exampleText = T.exampleText;
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
        <nav>
          <ul class="nav">
            <li>
              <div class="nav-after">
                <Link style={linkStyle} to="/">
                  Before
                </Link>
              </div>
            </li>
            <li>
              <div class="nav-after">
                <Link style={linkStyle} to="/after">
                  After
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        {/* header */}
        <div class="menu">
          <MenuAfter
            isMulti
            placeHolder="Select Colours"
            options={options}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
      <div class="layout-after">
        <div class="section-after">
          <p>
            {exampleText} Learn more at
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
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
      <div class="layout-after-2">
        <h2>Contact Us</h2>
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
            <label for="story">Report Your Feedback Here</label>
            <textarea
              id="story"
              name="story"
              class="text-area-after"
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default After;