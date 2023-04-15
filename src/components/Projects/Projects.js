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
              software engineering program. </b>
            The goal of the project is to create a space of where all users can create a post about tech community called EricTeCH. The final version of
            this project will have:</h4>
          -A website (front-end) with static and dynamic functionalities by using <b>ReactJs</b>.
          -A comprehensive database to manage the backend functionalitiesby using <b>Nodejs</b>.
          -An API that provides a communication interface between the front and backend of the system."
              ghLink="https://github.com/EricNiyo73/"
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
             
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection" */}

          {/* /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
