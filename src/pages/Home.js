import { useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List";

const Home = () => {
  useEffect(() => {
    document.title = "Eesa Zahed | Web Developer";
  }, []);

  return (
    <div>
      <Header subtitle="Web Developer" />
      <section id="about">
        <p>
          Hello there, I hope you're doing well. My name is Eesa Zahed, and I'm{" "}
          <strong>13 years old</strong>. I've been into coding and computer
          science from an early age. If you'd like to see my projects, please
          check out my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eesazahed"
            title="Follow me on GitHub @eesazahed"
          >
            GitHub
          </a>
          .
        </p>

        <div className="links">
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
            href="mailto:eszhd1@gmail.com"
          >
            Email
          </a>
          <a
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eesazahed"
          >
            GitHub
          </a>
        </div>

        <h4>Skills</h4>
        <p>
          Currently, I'm highly interested in and passionate about full-stack
          development. I started initially in front-end development but learned
          to expand my skillset later.
        </p>
        <p> Currently, I use:</p>
        <List
          items={[
            "HTML/CSS/JavaScript",
            "TypeScript",
            "React",
            "Node",
            "Express",
            "MongoDB",
            "Firebase",
            "Python",
            "Flask",
          ]}
        />
        <h4>Certifications</h4>
        <p>Here are the certifications I've accoladed in the past:</p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://certificates.cs50.io/2020086e-51d6-4098-9026-29048e0651c5.png"
            >
              CS50: Introduction to Computer Science
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freecodecamp.org/certification/eesazahed/responsive-web-design"
            >
              FreeCodeCamp | Responsive Web Design
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freecodecamp.org/certification/eesazahed/javascript-algorithms-and-data-structures"
            >
              FreeCodeCamp | JavaScript Algorithms and Data Structures
            </a>
          </li>
        </ul>
        <p className="small">Website designed and developed by Eesa Zahed.</p>
      </section>
    </div>
  );
};

export default Home;
