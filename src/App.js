import React from "react";
import bootstrapLogo from "./images/Bootstrap_logo.svg";
import css3Logo from "./images/css3-logo.svg";
import sassLogo from "./images/Sass_Logo_Color.svg";
import htmlLogo from "./images/iconfinder_html5.svg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="stack">
          <div className="technology">HTML</div>
          <div>
            <img src={htmlLogo} alt="html_logo" />
            <div>HTML5</div>
          </div>
          <div>JSX</div>
        </div>
        <div className="stack">
          <div className="technology">CSS</div>
          <div>
            <img src={css3Logo} alt="css3_logo" />
            <div className="logoName">CSS3</div>
          </div>
          <div>
            <img src={sassLogo} alt="sass_logo" />
            <div className="logoName">SASS</div>
          </div>
          <div>
            <img src={bootstrapLogo} alt="bootstrap_logo" />
            <div className="logoName">BOOTSTRAP</div>
          </div>
        </div>
        <div className="stack">
          <div className="technology">JS</div>
        </div>
        <div className="stack">
          <div className="technology">CMS</div>
        </div>
        <div className="stack">
          <div className="technology">Devops tools</div>
        </div>
        <div className="stack">
          <div className="technology">Others</div>
        </div>
      </body>
    </div>
  );
}

export default App;
