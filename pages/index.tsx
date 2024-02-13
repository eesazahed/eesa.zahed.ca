import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>Eesa Zahed - Full-stack Web Developer</title>
        <meta name="description" content="Made by Eesa Zahed" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/97064249"
        />
      </Head>
      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-7xl text-center font-bold">Eesa Zahed</h1>
        <a
          className={styles["image-link"]}
          href="https://github.com/eesazahed"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="rounded-3xl"
            src="https://avatars.githubusercontent.com/u/97064249"
            alt="My profile picture"
            width={250}
          />
        </a>
        <p className="my-8 text-2xl text-center">Full-stack Developer</p>
        <div className="md:w-1/2 w-5/6">
          <p className="my-4">
            Hello, my name is Eesa Zahed, and I do full-stack web development as
            a hobby. I started coding in 2015, using Scratch to learn basic
            concepts. I started to learn web development in 2018.
          </p>

          <p className="my-4">Tech stack:</p>
          <p className="my-1 mx-4">
            <b>Back-end:</b> Javascript, Typescript, Python
          </p>
          <p className="my-1 mx-4">
            <b>Front-end:</b> HTML, CSS, Sass, EJS, Jinja
          </p>
          <p className="my-1 mx-4">
            <b>Framworks:</b> Node, Express, React, Next.js, Flask
          </p>
          <p className="my-1 mx-4">
            <b>Databases:</b> SQL, SQLite, MongoDB, Firebase
          </p>
          <p className="my-1 mx-4">
            <b>Libraries:</b> TailwindCSS, PicoCSS, Bootstrap, jQuery
          </p>
          <p className="my-1 mx-4">
            <b>Platforms:</b> Git, GitHub, Visual Studio Code, MacOS Terminal
          </p>

          <p className="my-4">Links</p>
          <ul>
            <li className="mx-10 py-1 list-disc">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/eesazahed/"
              >
                Github
              </a>{" "}
              (for most of my projects)
            </li>
            <li className="mx-10 py-1 list-disc">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://replit.com/@eesazahed/"
              >
                Replit
              </a>{" "}
              (for most of my python programs)
            </li>
          </ul>

          <p className="my-4">
            Here are the certifications I&apos;ve accoladed in the past:
          </p>
          <ul>
            <li className="mx-10 py-1 list-disc">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://certificates.cs50.io/2020086e-51d6-4098-9026-29048e0651c5.png"
              >
                CS50x: Introduction to Computer Science
              </a>
            </li>
            <li className="mx-10 py-1 list-disc">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freecodecamp.org/certification/eesazahed/responsive-web-design"
              >
                FreeCodeCamp | Responsive Web Design
              </a>
            </li>
            <li className="mx-10 py-1 list-disc">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freecodecamp.org/certification/eesazahed/javascript-algorithms-and-data-structures"
              >
                FreeCodeCamp | JavaScript Algorithms and Data Structures
              </a>
            </li>
          </ul>
          <br />
          <p className="my-4">
            Contact me at{" "}
            <a rel="noreferrer" href="mailto:eszhd1@gmail.com">
              eszhd1@gmail.com
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="py-16 text-center">
        <p>Designed and developed by Eesa Zahed</p>
      </footer>
    </div>
  );
};

export default Home;
