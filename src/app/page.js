import Image from "next/image";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import HomeMain from "./Components/HomeMain";
import HeaderNav from "./Components/HeaderNav";
import Experience from "./Components/Experience";

export default function Home() {
  return (
    <main className=" w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative ">
    {/* // <section className="flex flex-col justify-between h-[98vh] w-[95vw] mx-auto mt-[3vh] px-6 md:px-22 pt-16 pb-0 rounded-t-[4rem] bg-black text-white font-sans"></section> */}

      <HomeMain id='top'/>
      <HeaderNav/>
      <AboutMe id='aboutme'/>
      <Skills id="skills" />
      <Experience id='experience'/>
      <Projects id="projects" />

    </main>



  );
}
