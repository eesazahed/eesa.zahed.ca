import { useEffect } from "react";
import Header from "../components/Header";

const About = () => {
  useEffect(() => {
    document.title = "Eesa Zahed | About";
  }, []);

  return (
    <div>
      <Header subtitle="About" />
      <section id="about">
        <p>
          Apart from coding, one of my favorite things to learn is history. I'm
          currently learning World History on{" "}
          <a target="_blank" rel="noreferrer" href="https://khanacademy.org/">
            Khan Academy
          </a>
          , and enjoy the subject. I also like learning on{" "}
          <a target="_blank" rel="noreferrer" href="https://ocw.mit.edu/">
            MIT Open Courseware
          </a>
          , and I think it's a fantastic place to find free resources and
          videos, which is excellent.
        </p>

        <h4>In my free time</h4>
        <p>
          I enjoy playing basketball and soccer, watching informational YouTube
          channels (currently I enjoy{" "}
          <a
            id="youtube"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/KingsandGenerals/"
          >
            Kings and Generals
          </a>
          ), and reading long books. Occasionally, I like playing strategic
          videogames such as Civilization VI.
        </p>
        <p className="small">Website designed and developed by Eesa Zahed.</p>
      </section>
    </div>
  );
};

export default About;
