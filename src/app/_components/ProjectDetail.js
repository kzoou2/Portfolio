'use client';

import { useState} from "react";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "../_data/ProjectsDetails/ProjectsData"; 
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink, FiLink } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



export default function ProjectDetail(){
    const router = useRouter(); 
    const params = useParams();
    const projectId = params.id;
    const project = ProjectsData.find((p) => String(p.id) === String(projectId)); 


    const [lightboxIndex, setLightboxIndex] = useState(-1); 
    const [openToggles, setOpenToggles]= useState([]);
    
    const handleToggle = (title) => {
        setOpenToggles(prev => 
            prev.includes(title) 
                ? prev.filter((t) => t !== title)
                : [...prev, title]
        );
    };

    if (!project) return null; 

    return(
        <div > 
            <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto px-5 font-bold leading-normal sm:leading-snug mb-6 text-gray-900 dark:text-white ">
                {project.title}
            </h2>

            <div className="flex gap-8 flex-wrap max-w-4xl mx-auto px-5">

                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-medium text-foreground/50">기술 스택</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {project.info.skills.map((skill, i) => (
                            <div key={i} className="relative group w-8 h-8 sm:w-9 sm:h-9">
                                <img src={skill.img} alt={skill.name} className="w-full h-full rounded-sm shadow-md" />
                                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center max-w-[120px]">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            
                <div className="flex flex-wrap gap-6 sm:gap-10 text-base mb-6">
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-foreground/50">인원</p>
                        <div className="font-medium text-gray-700 dark:text-gray-300 mt-1">
                            {project.info.member}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-foreground/50">기간</p>
                        <div className="font-medium text-gray-700 dark:text-gray-300 mt-1">
                            {project.info.period}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-foreground/50">관련 링크</p>
                        <div className="flex flex-wrap gap-5 font-medium text-gray-700 dark:text-gray-300 mt-1">
                            {project.links.map((link, i) => (
                                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-2 " >
                                    {link.label === "Github" ? (
                                        <IoLogoGithub className=" text-xl" />
                                    ) : link.label === "배포" ? (
                                        <FiExternalLink className="text-xl" />
                                    ) : (
                                        <FiLink className="text-xl"/>
                                    )}
                                    <span >{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <hr className="border-gray-200 dark:border-gray-600 mx-auto mb-10" />
            
            
            <div className="Detail-body max-w-4xl mx-auto px-3 sm:px-5">

                <div className="mb-8 p-4 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 rounded-lg bg-gray-50">
                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base sm:text-base md:text-lg">
                        {project.subText}
                    </p>
                </div>


                {/* 주요 기능 */}
                {project.featInfo?.length > 0 && (
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#F59E0B] dark:bg-[#FFEA00]"></div>
                            <h3 className="font-bold text-2xl leading-none">주요 기능</h3>
                        </div>
                        <ul className="ml-3 sm:ml-4 text-base sm:text-lg leading-[1.65] list-disc text-gray-700 dark:text-gray-300 space-y-1 sm:pl-4">
                            {project.featInfo.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* 담당 영역*/}
                {project.parts?.length > 0 && (
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#9BE200] dark:bg-[#8DFC7F]"></div>
                            <h3 className="font-bold text-2xl leading-none">담당 영역</h3>
                        </div>

                        {project.parts.map((part, i) => (
                            <div key={i} className="mb-3 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <button className={`w-full flex justify-between items-center p-3 sm:p-4 font-bold text-base sm:text-lg transition ${openToggles.includes(part.title) ? 
                                    "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" 
                                    : "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-inherit"}`}  onClick={() => handleToggle(part.title)} >
                                    <span className="ml-2 text-start">{part.title}</span>
                                    <span className={`text-foreground/60 dark:text-gray-400 transition-transform duration-200 ${openToggles.includes(part.title) ? "rotate-180" : ""}`}>
                                        <IoIosArrowDown />
                                    </span>
                                </button>

                                {openToggles.includes(part.title) && (
                                    <ul className="p-3 sm:p-4 bg-white font-medium dark:bg-gray-900 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                                        {part.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                
                {/* 트러블슈팅*/}
                {project.trouble?.length > 0 && (
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#df6556] dark:bg-[#AD6CFF]"></div>
                            <h3 className="font-bold text-2xl leading-none">트러블슈팅</h3>
                        </div>
                        
                        {project.trouble.map((issue, i) => (
                        <div key={i} className="mb-3 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <button className={`w-full flex justify-between items-center p-3 sm:p-4 font-bold text-base sm:text-lg transition ${openToggles.includes(issue.title) ? 
                                "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" : "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-inherit"}`}  onClick={() => handleToggle(issue.title)} >
                                <span className="ml-2 text-start">{issue.title}</span>
                                <span className={`text-foreground/60 dark:text-gray-400 transition-transform duration-200 ${openToggles.includes(issue.title) ? "rotate-180" : ""}`}>
                                    <IoIosArrowDown />
                                </span>
                            </button>

                            {openToggles.includes(issue.title) && (
                                <ul className="p-3 sm:p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-sm list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    {issue.items.map((item, j) => (
                                        <li key={j} className="grid grid-cols-[auto_1fr] gap-2">
                                            <span className="font-semibold text-gray-900 dark:text-white mt-[-2px]"> {item.label}</span>
                                            {item.text.includes('\n') ? (
                                                <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-sm sm:text-base">
                                                {item.text.split('\n').map((line, idx) => (
                                                    <li key={idx} className="text-gray-700 dark:text-gray-300 break-words">
                                                    {line.trim()}
                                                    </li>
                                                ))}
                                                </ul>
                                            ) : (
                                                <span className="ml-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.text}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            
                        </div>
                        ))}
                    </div>
                )}

                {/* 이미지 섹션 */}
                {project.images?.length > 0 && (
                    <div className="mt-10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#40bbed] dark:bg-[#3ECFFF]"></div>
                            <h3 className="font-bold text-2xl">작업 화면</h3>
                        </div>

                        <p className="text-xs sm:text-sm italic text-foreground/60 mb-5 ml-1">
                            * 이미지를 클릭하면 크게 볼 수 있습니다.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {project.images.map((img, i) => (
                                <div key={i} className="group cursor-pointer" onClick={() => setLightboxIndex(i)}>
                                    <div className="w-full aspect-[16/10] overflow-hidden rounded-lg border border-gray-200/60 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                                            <img src={img.imgurl} alt={img.subject} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                                    </div>

                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 font-medium truncate">
                                        {img.subject}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Lightbox */}
                {lightboxIndex >= 0 && (
                    <Lightbox
                        slides={project.images.map((img) => ({ src: img.imgurl, title: img.subject }))}
                        open={lightboxIndex >= 0}
                        index={lightboxIndex}
                        close={() => setLightboxIndex(-1)}
                        controller={{ closeOnBackdropClick: true }}
                        styles={{
                            container: { backgroundColor: "rgba(20, 20, 20, 0.95)" }, 
                            slide: { borderRadius: "14px", }, // 이미지 모서리 둥글게
                            navigation: { color: "#fff"}, 
                            caption: {
                                color: "#fff", 
                                fontSize: "16px", 
                                textAlign: "center", 
                                marginTop: "10px", 
                            },
                        }}
                    />
                )}
            </div>
            
        </div>
    );
}