import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h2 className="title">My Work</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
          <div>
          <a href="https://icons8.com/icon/AZOZNnY73haj/github">GitHub icon by Icons8</a><br />
          <a href="https://icons8.com/icon/15152/launch">Launch icon by Icons8</a>
        </div>
        </section>
    );
  }

export default Portfolio; 