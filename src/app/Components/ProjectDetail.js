"use client";
import React, { useEffect,useState   } from "react";
import Modal from "./Modal"
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink, FiLink, } from "react-icons/fi";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function ProjectDetail({project, closeModal }) {
    const [lightboxIndex, setLightboxIndex] = useState(-1); 
    const [openToggles, setOpenToggles]= useState([]);
    
    const handleToggle = (title) =>{
        if (openToggles.includes(title)) {
            setOpenToggles(openToggles.filter((t) => t !== title));
        } else{
            setOpenToggles([...openToggles, title]);
        }
    };

    // 외부스크롤 
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
        document.body.style.overflow = "auto";
        };

    }, []);

    // lightbox
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    

    return (
        <Modal>
            <div className="sticky z-10  flex justify-end top-2 ">
                <button onClick={closeModal} aria-label="Close"
                    className="font-semibold text-xl w-9 h-9 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                                backdrop-blur-sm transition bg-white/60 dark:bg-white/5 border border-gray-300/80 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:bg-gray-300/70 dark:hover:bg-white/10">
                    ✕
                </button>
            </div>

            {/* <p className="text-xl font-bold  md:text-4xl  leading-normal break-keep mb-4">{project.title}</p> */}
            <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto px-5 font-bold leading-normal sm:leading-snug mb-4 text-gray-900 dark:text-white ">
                {project.title}
            </h2>

            <div className="flex gap-6 flex-wrap max-w-4xl mx-auto px-5">
                {/* <div className="flex flex-col gap-1 w-full">
                    <p className="mb-4">{project.subText}</p>
                </div> */}

                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-medium text-foreground/50">기술 스택</p>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                        {project.info.skills.map((skill, i) => (
                            <div key={i} className="relative  group w-7 h-7 sm:w-8 sm:h-8">
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
                                        <span >
                                            {link.label}
                                        </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <hr className="border-gray-200 dark:border-gray-600 mx-auto mb-10" />
            
            
            <div className="Detail-body  max-w-4xl mx-auto px-3 sm:px-5">
                <div className="mb-8 p-4 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 rounded-lg bg-gray-50">
                {/* <div className="mb-10 rounded-lg bg-[#9BE200]/10 dark:bg-[#8DFC7F]/20 p-4"> */}
                {/* <div className="mb-10 rounded-lg bg-[#F59E0B]/10 dark:bg-[#AD6CFF]/20 p-4"> */}
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

                {/* 담당 영역 */}
                {project.parts?.length > 0 && (
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#9BE200] dark:bg-[#8DFC7F]"></div>
                            <h3 className="font-bold text-2xl leading-none">담당 영역</h3>
                        </div>

                        {project.parts.map((part, i) => (
                            <div key={i} className="mb-3 md:ml-5 md:mr-5 sm:ml-6  border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <button className={`w-full flex justify-between items-center p-3 sm:p-4 font-bold text-base sm:text-lg transition  ${openToggles.includes(part.title) ? 
                                    "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" 
                                    : "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-inherit"}`}  onClick={() => handleToggle(part.title)} >
                                    <span className="ml-2 text-start">{part.title}</span>
                                    <span className={`text-foreground/60 dark:text-gray-400 transition-transform duration-200 ${openToggles.includes(part.title) ? "rotate-180" : ""}`}>
                                        ▼
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

                

                {/* 트러블슈팅 */}
                {project.trouble?.length > 0 && (
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#df6556] dark:bg-[#AD6CFF]"></div>
                            <h3 className="font-bold text-2xl leading-none">트러블슈팅</h3>
                        </div>
                        
                        {project.trouble.map((issue, i) => (
                        <div key={i} className="mb-3 md:ml-5 md:mr-5 sm:ml-6  border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <button className={`w-full flex justify-between items-center p-3 sm:p-4 font-bold text-base sm:text-lg transition  ${openToggles.includes(issue.title) ? 
                                "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" : "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-inherit"}`}  onClick={() => handleToggle(issue.title)} >
                                <span className="ml-2 text-start">{issue.title}</span>
                                <span className={`text-foreground/60 dark:text-gray-400 transition-transform duration-200 ${openToggles.includes(issue.title) ? "rotate-180" : ""}`}>
                                    ▼
                                </span>
                            </button>

                            {openToggles.includes(issue.title) && (
                                // <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-1 sm:pl-4">
                                <ul className="p-3 sm:p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-sm list-disc list-inside space-y-1">
                                    {issue.items.map((item, j) => (
                                        <li key={j} className=" grid grid-cols-[auto_1fr] gap-2">
                                            <span className="font-semibold text-gray-900 dark:text-white "> {item.label}</span>
                                            {item.text.includes('\n') ? (
                                                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                                                {item.text.split('\n').map((line, idx) => (
                                                    <li key={idx} className="text-gray-700 dark:text-gray-300 break-words">
                                                    {line.trim()}
                                                    </li>
                                                ))}
                                                </ul>
                                            ) : (
                                                <span className="ml-2 text-gray-700 dark:text-gray-300">{item.text}</span>
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
                    <div className="mt-5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#40bbed] dark:bg-[#3ECFFF]"></div>
                            <h3 className="font-bold text-2xl leading-none">작업화면</h3>
                        </div>

                        <p className="text-sm italic text-foreground/60 mb-4 ml-4 sm:ml-6"> * 이미지 클릭시 크게 볼 수 있습니다.</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3  mt-5 ">
                            {project.images.map((img, i) => (
                                <div key={i} className="flex flex-col">
                                    <img src={img.imgurl} alt={img.subject} onClick={() => setLightboxIndex(i)} className="rounded-lg border border-white/10 shadow-xl0 cursor-pointer"/>
                                    <p className="text-sm font-medium text-gray-500 mt-1 items-center text-center truncate">[{img.subject}]</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                )}

                {/* Lightbox */}
                {lightboxIndex >= 0 && (
                    <Lightbox
                        slides={project.images.map((img) => ({ src: img.imgurl, title: img.subject, }))}
                        open={lightboxIndex >= 0}
                        index={lightboxIndex}
                        close={() => setLightboxIndex(-1)}
                        controller={{ closeOnBackdropClick: true }}
                        plugins={[]} // 나중에 추가 기능 넣을 수 있음
                        styles={{
                            container: { backgroundColor: "rgba(20, 20, 20, 0.85)" }, // 배경 색상
                            slide: { borderRadius: "14px", }, // 이미지 모서리 둥글게
                            navigation: { color: "#fff"}, // 화살표 색
                            caption: {
                                color: "#fff",          // 캡션 글자색
                                fontSize: "16px",       // 글자 크기
                                textAlign: "center",    // 중앙 정렬
                                marginTop: "10px",      // 이미지 아래 여백
                            },
                        }}
                    />
                )}
            </div>
            
        </Modal>
        
    );
}
