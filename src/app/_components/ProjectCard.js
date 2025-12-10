import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default function ProjectCard({ project }) {
    return (

        <div className=" w-[350px] max-w-full ">
            <div className="group rounded-2xl overflow-hidden bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1">

                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={project.img} alt={project.title}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                <div className="p-5 flex flex-col gap-3">

                    {project.category && (
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 tracking-wide">
                            {project.category}
                        </p>
                    )}

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                        {project.title}
                    </h3>

                    <p className="text-sm text-gray-700/80 dark:text-gray-400 line-clamp-2">
                        {project.Summary}
                    </p>

                    <div className="flex justify-between items-center mt-2">
                        <Link href={`/project/${project.id}`} scroll={false}  className="px-3 py-1.5 rounded-xl text-sm font-medium border border-gray-300 dark:border-white/20 bg-gray-50/60 dark:bg-white/10 backdrop-blur-lg hover:bg-gray-100/70 dark:hover:bg-white/20 transition">
                            자세히 보기
                        </Link>

                        <div className="flex items-center gap-2">
                            {project.links?.find(l => l.label === "Github") && (
                                <a href={project.links.find(l => l.label === "Github")?.href} target="_blank" className="p-2 rounded-full bg-gray-50/60 dark:bg-white/10  border border-gray-300 dark:border-white/20 backdrop-blur-lg hover:bg-white/30 dark:hover:bg-white/20 transition">
                                    <IoLogoGithub className="text-[20px] text-gray-800 dark:text-gray-200" />
                                </a>
                            )}

                            {project.links?.find(l => l.label === "배포") && (
                                <a href={project.links.find(l => l.label === "배포")?.href} target="_blank" className="p-2 rounded-full bg-gray-50/60 dark:bg-white/10  border border-gray-300 dark:border-white/20 backdrop-blur-lg hover:bg-white/30 dark:hover:bg-white/20 transition">
                                    <FiExternalLink className="text-[20px] text-gray-800 dark:text-gray-200" />
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        

    );
}
