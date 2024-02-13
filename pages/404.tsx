import type { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>404</title>
        <meta name="description" content="Made by Eesa Zahed" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/97064249?v=4"
        />
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-7xl text-center font-bold">Page not found</h1>
      </main>

      <footer className="py-16 text-center">
        <p>Designed and developed by Eesa Zahed</p>
      </footer>
    </div>
  );
};

export default Custom404;
