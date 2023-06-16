import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/starwars.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/techtrend.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BLOG API"
              description=" A blog API is a set of tools and protocols that allow third-party developers to interact with a blog platform or service programmatically. It typically consists of a defined set of endpoints that allow developers to read, create, update, and delete blog posts, comments, and other related content.
              A well-designed blog API should be easy to use, with clear documentation and simple authentication mechanisms. It should also be flexible enough to accommodate a wide range of use cases and workflows, while remaining secure and scalable.
              Some common use cases for a blog API include creating mobile or desktop blogging applications, integrating a blog with social media platforms, or automating certain tasks related to content management."
              ghLink="https://github.com/EricNiyo73/blogapi"
              demoLink="https://github.com/EricNiyo73/blogapi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tech Blog Post"
              description="The ALX- sums up the implementation of my 12 months of studies at the ALX-intranet - the fullstack
              software engineering program. 
              
            The goal of the project is to create a space of where all users can create a post about tech community called EricTeCH. The final version of
            this project will have:
          -A website (front-end) with static and dynamic functionalities by using ReactJs.
          -A comprehensive database to manage the backend functionalitiesby using Nodejs.
          -An API that provides a communication interface between the front and backend of the system."
              ghLink="https://github.com/EricNiyo73/alxbrand.git"
              demoLink="https://alxbrand.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Star Wars API fetching"
              description=" It is a web service that provides a RESTful interface for accessing information about various aspects of the
              Star Wars universe, including characters, films, species, planets, vehicles, and starships. The data provided
              by the API is based on the Star Wars canon, which includes the films, TV shows, books, and comics that are
              part of the official Star Wars continuity. Developers can use the SWAPI to build applications and websites
              that integrate with the Star Wars universe and
              provide fans with a wealth of information and interactive experiences."
              ghLink="https://github.com/EricNiyo73/APIFetch"
              demoLink="https://swapifetch.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
