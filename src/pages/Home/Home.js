import "./Home.css";
import { Link } from "react-router-dom";
import T from "../../txt.json";
import SliderBefore from "../../components/SliderBefore/SliderBefore";
import MenuBefore from "../../components/MenuBefore/MenuBefore";
import deloitteIcon from "../../assets/Deloitte-Digital.jpeg";

const Home = () => {
  let exampleText = T.exampleText;
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#D3D3D3",
  };
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  return (
    <>
      <div class="header">
        <img class="logo" src={deloitteIcon} alt="doggo"></img>
        <nav>
          <ul class="nav">
            <li>
              <div class="nav-before-active">
                <Link style={linkStyle} to="/">
                  Inaccessible Page
                </Link>
              </div>
            </li>
            <li>
              <div class="nav-before">
                <Link style={linkStyle} to="/after">
                  Accessible Page
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        {/* <div class="menu">
          <MenuBefore
            isMulti
            placeHolder="Select..."
            options={options}
            onChange={(value) => console.log(value)}
          />
        </div> */}
      </div>
      <div class="container">
        <h1 class="heading">Inaccessible Page</h1>
        <div class="layout1">
          <div class="section1">
            <p>
              <b>
                {exampleText} Learn more at
                <a
                  class="link-style"
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                >
                  {" "}
                  w3.org
                </a>
              </b>
            </p>
            <p></p>
          </div>
          <div class="section2">
            <SliderBefore></SliderBefore>
          </div>
        </div>
        {/* Contact Us Form */}
        <div class="layout2">
          <h2 class="form-heading">Contact Us</h2>
          <div class="menu-before">
            <MenuBefore
              isMulti
              placeHolder="Select..."
              options={options}
              onChange={(value) => console.log(value)}
            />
          </div>
          <form>
            <div class="form-input">
              <div class="field-container">
                <input
                  class="field"
                  type="text"
                  name="name"
                  placeholder="firstname"
                />
              </div>
              <div class="field-container2">
                <input
                  class="field"
                  type="text"
                  name="name"
                  placeholder="lastname"
                />
              </div>
            </div>
            <div class="text-container">
              <textarea
                class="text-area"
                placeholder="Type something here :D"
              ></textarea>
            </div>
            <input type="submit" value="Done" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
