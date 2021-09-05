import React from 'react'
import Typed from 'react-typed';


function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I am Charity</h1>
                <Typed 
                  className="typed-text"
                  strings={["Web Developer", "Web Designer"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop                  
                  />
            </div>
        </div>
    )
}

export default Header;
