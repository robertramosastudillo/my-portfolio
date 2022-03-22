import React from "react";
import Head from "next/head";

export const Seo = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Robert Ramos | Full Stack Developer</title>
      <meta
        name="description"
        content="Desarrollador Full Stack en tecnologias javascript. Especializado en el stack MERN (MongoDB, ExpressJS, ReactJS Y NodeJS)."
      />
      <meta
        property="og:title"
        content="Robert Ramos | Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Desarrollador Full Stack en tecnologias javascript. Especializado en el stack MERN (MongoDB, ExpressJS, ReactJS Y NodeJS)."
      />
      <meta
        property="og:image"
        content="banner-main/profile.png"
      />
      <meta property="og:url" content="https://robertramosastudillo.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CO" />
    </Head>
  );
};
