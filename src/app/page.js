import HomeSection from "./_sections/HomeSection";
import AboutSection from "./_sections/AboutSection";
import SkillsSection from "./_sections/SkillsSection";
import ProjectsSection from "./_sections/ProjectsSection";
import ExperienceSection from "./_sections/ExperienceSection";
import HeaderNav from "./_components/HeaderNav";
import Footer from "./_components/Footer";



export default function Home() {
	return (
		<main className=" w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative ">
			{/* // <section className="flex flex-col justify-between h-[98vh] w-[95vw] mx-auto mt-[3vh] px-6 md:px-22 pt-16 pb-0 rounded-t-[4rem] bg-black text-white font-sans"></section> */}

			<HomeSection id='top'/>
			<HeaderNav/>
			<AboutSection id='about'/>
			<SkillsSection id="skills" />
			<ExperienceSection id='experiences'/>
			<ProjectsSection id="projects" />

			<Footer/>

		</main>




	);
}
