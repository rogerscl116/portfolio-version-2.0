import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Charity Rogers</h2>
          <ul>
            <li>
              Enthusiastic web developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. 
            </li>
          </ul>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Front-end Proficiencies</h2>
          <ul>
            <li>
                HTML, CSS
            </li>
            <li>
                JavaScript
            </li>
            <li>
                jQuery
            </li>
            <li>
                Bootstrap
            </li>
            <li>
                Handlebars
            </li>
            <li>
                React
            </li>
            <li>
                Responsive/Mobile Design
            </li>
          </ul>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Back-end Proficiencies</h2>
          <ul>
            <li>
                APIs
            </li>
            <li>
                Node
            </li>
            <li>
                Express
            </li>
            <li>
                MySQL, Sequelize
            </li>
            <li>
                NoSQL
            </li>
            <li>
                MongoDB, Mongoose
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p class="mt-5">
            <a href="https://www.linkedin.com/in/charity-rogers-a7115a11a/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="Charity's LinkedIn page"
              />
            </a>
        </p>

          <a
            href=""
            class="link"
          >
            Download Resume
          </a>
    </div>
    </section>
  );
}

export default Resume;