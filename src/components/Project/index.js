import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// create individual project cards
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p id="proj-icons-container">
              <p id="topics">
                ({props.topics})
              </p>
              <a href={props.github}><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" id="project-icon"/></a> 
              <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/launched-rocket--v1.png" alt="Live Application" id="project-icon"/></a> 
             </p>
        </div>
      </div>
    );
}

  export default ProjectCards; 