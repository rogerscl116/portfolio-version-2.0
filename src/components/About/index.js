import React from 'react';
import selfie from '../../selfie03.JPG';

function About() {
  return (
    <section>
      <h1 id="about">Charity Rogers</h1>
      <div>
        <img src={selfie} className="selfie" alt="Charity Rogers" />
        <p>Curabitur sed elit maximus, mollis enim quis, eleifend sapien. Nunc sit amet justo lacus. Maecenas blandit vel dolor id aliquam. Cras et mollis arcu, sed pretium elit. Aenean semper malesuada erat, a vulputate nisi condimentum at. Nunc sagittis blandit quam at malesuada. Fusce condimentum, dui eu accumsan commodo, turpis elit mattis libero, viverra fringilla turpis mi sit amet massa. Maecenas eu porta lectus.
        </p>
      </div>
    </section>
  );
}

export default About;