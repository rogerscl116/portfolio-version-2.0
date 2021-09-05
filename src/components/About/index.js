import React from 'react';
import selfie from '../../selfie03.JPG';

function About() {
  return (
    <section>
      <h1 id="about-title">A Little About Me</h1>
      <hr></hr>
      <div>
        <img src={selfie} className="selfie" alt="Charity Rogers" />
        <p>My name is Charity Rogers. I was born in southern Illinois where I graduated from high school and community college. Some of the things I love are family, friends, animals, music, computers, and video games. I started working over 18 years ago, having great experience in customer service and electronics. One of my biggest passions is working on computers so I decided to get into web development.
        </p>
      </div>
    </section>
  );
}

export default About;