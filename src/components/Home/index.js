import React from 'react'
import Typed from 'react-typed';


function Home() {
    return (
        <div className="home-wrapper">
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

export default Home;
