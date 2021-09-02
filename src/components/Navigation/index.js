import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Charity Rogers
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About Me
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#portfolio" onClick={() => handleClick()}>
              Portfolio
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
       </ul>
      </nav>
    </header>
  );
}

export default Nav; 