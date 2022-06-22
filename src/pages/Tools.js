import { useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List";

const Tools = () => {
  useEffect(() => {
    document.title = "Eesa Zahed | Tools";
  }, []);

  return (
    <div>
      <Header subtitle="Tools" />
      <section id="about">
        <p>
          I like using many tools in my everyday life to make tasks simple and
          efficient, and here are some that I use:
        </p>
        <p>Hardware:</p>
        <List items={["Mac Mini (M1 chip)", "AirPods Pro"]} />
        <p>Software:</p>
        <List
          items={[
            "Visual Studio Code",
            "Git/GitHub/GitHub Desktop",
            "Replit",
            "Figma",
            "PyCharm",
            "Stack Overflow",
            "Procreate",
            "Zoom",
            "MacOS Terminal",
          ]}
        />
        <p className="small">Website designed and developed by Eesa Zahed.</p>
      </section>
    </div>
  );
};

export default Tools;
