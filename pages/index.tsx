import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Gradient from "../components/Gradient";
import ListItem from "../components/ListItem";
import Link from "../components/Link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [reposCount, setReposCount] = useState<number>(0);

  useEffect(() => {
    fetch("https://api.github.com/users/eesazahed")
      .then((response) => response.json())
      .then((data) => setReposCount(data.public_repos));
  }, []);

  return (
    <div className="mx-8">
      <Head>
        <title>Eesa Zahed - Full-stack Developer</title>
        <meta name="description" content="Made by Eesa Zahed" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/97064249"
        />
      </Head>
      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-6xl md:text-8xl text-center font-bold">
          <Gradient text="Eesa Zahed" />
        </h1>
        <a
          className={styles["image-link"]}
          href="https://github.com/eesazahed"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://avatars.githubusercontent.com/u/97064249"
            alt="My profile picture"
            width={250}
          />
        </a>
        <p className="my-8 text-2xl text-center italic flex justify-between h-full items-center">
          High school student <span className="mx-3">&mdash;</span>
          <span className="not-italic	text-4xl">🇨🇦</span>
          <span className="mx-3">&mdash;</span> Full-stack developer
        </p>
        <div className="md:w-1/2 w-5/6">
          <p className="my-4">
            I&apos;m a high school student who does full-stack web development
            as a hobby. I started learning coding with Scratch in 2015 before
            moving on to web development in 2018.
          </p>

          <section>
            <h2 className="mt-12 mb-4 font-bold text-3xl">Tech stack</h2>
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
          </section>

          <section>
            <h2 className="mt-12 mb-4 font-bold text-3xl">Projects</h2>
            <ul>
              <ListItem
                text="LaserSocial"
                href="https://laser.vercel.app/feed"
                description="functioning social media platform"
              />
              <ListItem
                text="Explore Ontario"
                href="https://github.com/eesazahed/isu"
                description="tourism website"
              />
              <ListItem
                text="Quadratic Helper"
                href="https://github.com/eesazahed/quadratic-helper"
                description="explains & solves quadratic equations"
              />
              <ListItem
                text="Create Banner"
                href="https://github.com/eesazahed/create-banner"
                description="generates a customizable banner"
              />
              <ListItem
                text="Bitcoin Calc"
                href="https://github.com/eesazahed/bitcoin-calc-chrome-extension"
                description="chrome extension for a bitcoin price converter"
              />
            </ul>
            <p className="mt-4">
              View all <b>{reposCount}</b> of my public repositories on{" "}
              <Link text="GitHub" href="https://github.com/eesazahed/" />
            </p>
          </section>

          <section>
            <h2 className="mt-12 mb-4 font-bold text-3xl">Links</h2>
            <ul>
              <ListItem
                text="Github"
                href="https://github.com/eesazahed/"
                description="view my repos"
              />
              <ListItem
                text="Replit"
                href="https://replit.com/@eesazahed/"
                description="view my python programs"
              />
              <ListItem
                text="LinkedIn"
                href="https://www.linkedin.com/in/eszhd/"
                description="view my profile"
              />
              <ListItem
                text="FreeCodeCamp"
                href="https://www.freecodecamp.org/news/author/ez/"
                description="read my articles"
              />
            </ul>
          </section>

          <section>
            <h2 className="mt-12 mb-4 font-bold text-3xl">Certifications</h2>
            <ul>
              <ListItem
                text="CS50x: Introduction to Computer Science"
                href="https://certificates.cs50.io/2020086e-51d6-4098-9026-29048e0651c5.png"
              />

              <ListItem
                text="FreeCodeCamp | Responsive Web Design"
                href="https://www.freecodecamp.org/certification/eesazahed/responsive-web-design"
              />

              <ListItem
                text="FreeCodeCamp | JavaScript Algorithms and Data Structures"
                href="https://www.freecodecamp.org/certification/eesazahed/javascript-algorithms-and-data-structures"
              />
            </ul>
          </section>

          <section>
            <h2 className="mt-12 mb-4 font-bold text-3xl">Send me an email</h2>
            <p>eszhd1 (at) gmail.com</p>
          </section>
        </div>
      </main>

      <footer className="py-16 text-center">
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://github.com/eesazahed/" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
