import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eric NIYOKWIZERWA</span>
            from <span className="purple"> Kigali, Rwanda.</span>
            <br />BE Student a web developer with 2 years of exprience , HackerRank certified,
            2 years of learning in Software Development, understanding of all concepts about FrontEnd and Backend
            developing
            and Capable of Performance Testing constantly seeks out innovative solutions to everyday problems in
            Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">EricNiyo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
