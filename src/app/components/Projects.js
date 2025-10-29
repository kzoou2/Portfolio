"use client";
import { useRouter,usePathname  } from "next/navigation";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { useState,useEffect } from "react";
import ProjectDetail from './ProjectDetail';
import { ProjectsData } from '../Data/ProjectsDetails/ProjectsData';

export default function Projects({ data  }){
    const [selectedProject, setSelectedProject] = useState(null);

    // const openModal = (project) => setSelectedProject(project);
    // const closeModal = () => setSelectedProject(null);

    const router = useRouter();
    const pathname = usePathname();

  const openModal = (project) => {
    setSelectedProject(project);
      window.history.pushState(null, "", `/project/${project.id}`);
  };

  const closeModal = () => {
    setSelectedProject(null);
    window.history.pushState(null, "", "/"); // 원래 페이지로 복귀
  };

  useEffect(() => {
    const handlePopState = () => setSelectedProject(null);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

    // const router = useRouter();
    // const handleClick = (e) =>{
    //     e.preventDefault();
    //     openModal(data);
    //     router.push(`/project/${data.id}`);
    // }


    return(
        <section id="projects" className='w-full mb-20'>
            <div>
                <h2 className="section-index">프로젝트 상세</h2>
                <p className="section-label">주요 프로젝트의 세부 사항을 확인해보세요</p>

                <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
                    {ProjectsData.map((data, id) =>(
                        <div key={id} className='relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                            <div aria-hidden='true' className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>

                            <div className='relative'>
                                <div className='mb-4'>
                                    <img src={data.img} alt={data.title} className="relative mb-2.5 md:mb-4 w-full h-36 md:h-40 rounded-md overflow-hidden"/>
                                </div>

                                <h3 className="text-xl font-bold mb-1"> {data.title}</h3>
                                <div className='flex space-x-2 mb-4'>
                                    {/* {} */}
                                </div>
                                
                                <div className='text-gray-600 mb-6 space-y-2 min-h-[3.5rem] leading-relaxed line-clamp-2'>
                                    {data.subTitle}
                                </div>

                                <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                                    {/* <a href={`/project/${data.id}` || '#'} onClick={handleClick} key={data.id} className="no-underline group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"> */}
                                    <a href={`/project/${data.id}` || '#'} onClick={(e) => { e.preventDefault(); openModal(data);}} key={data.id} className="no-underline group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                        <span>자세히 보기</span>
                                    </a>
                                    
                                    {data.links?.find((l) => l.label === "Github") && (
                                        <a href={data.links.find((l) => l.label === "Github")?.href || "#"} target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-xl text-gray-950 bg-gray-100 hover:bg-gray-200/75 dark:text-white dark:bg-gray-500/10 size-8 justify-center">
                                            <IoLogoGithub className="size-5" />
                                        </a>
                                    )}

                                    {data.links?.find((l) => l.label === "배포") && (
                                        <a href={data.links.find((l) => l.label === "배포")?.href || "#"} target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-xl text-gray-950 bg-gray-100 hover:bg-gray-200/75 dark:text-white dark:bg-gray-500/10 size-8 justify-center">
                                            <MdOutlinePlayCircleOutline className="size-5" />
                                        </a>
                                    )}
                            
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                <ProjectDetail project={selectedProject} closeModal={closeModal} />
                )}
            </div>
        </section>
    );
}

