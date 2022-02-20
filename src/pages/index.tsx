import type { NextPage } from "next";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { BannerMain } from "../components/BannerMain/BannerMain";
import { Contact } from "../components/Contact/Contact";
import { Experience } from "../components/Experience/Experience";
import { MyJob } from "../components/MyJob/MyJob";

const Home: NextPage = () => {
  return (
    <>
      <BannerMain />
      <AboutMe />
      <Experience />
      <MyJob />
      <Contact />
    </>
  );
};

export default Home;
