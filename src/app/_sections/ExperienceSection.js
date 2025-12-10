'use client';

import { useState } from "react";
import { ExperienceData } from "../_data/ExperienceData";
import { IoIosArrowForward  } from "react-icons/io";

export default function ExperienceSection(){

    const grouped = ExperienceData.reduce((acc, item)=>{
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

const [openReadme, setOpenReadme] = useState([]);

const toggleReadme = (name) => {
    setOpenReadme(prev =>
        prev.includes(name) ? prev.filter(item => item !== name):[...prev, name]
    );
};

    return(
        <section id='experiences' className="w-full scroll-mt-[10vh]">
            <div>
                <h2 className="section-index">경험 및 이력</h2>
                <p className="section-label">다양한 프로젝트와 활동을 통해 얻은 경험을 확인 할 수 있습니다.</p>
            </div>
            
            <div className="max-w-full sm:max-w-[768px] mx-auto mb-20 px-4 sm:px-0">
                {Object.entries(grouped).map(([type, items]) => (
                    <div key={type} className="mb-12">

                        <div className="flex gap-4 items-center  mt-12 mb-8">
                            <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15"></div>
                            <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">{type}</p>
                            <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15"></div>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-10">
                            {items.map((item, idx) => (
                                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 gap-y-4 sm:items-start">

                                    {/* <div className="flex gap-2.5 sm:justify-end justify-start items-center mb-1 sm:mb-3">
                                        <p className="text-sm md:text-base text-foreground/60">{item.period}</p>
                                    </div> */}

                                    <div className="flex items-center gap-2 sm:justify-end justify-start mb-1 sm:mb-3">
                                        <p className="text-sm md:text-base text-foreground/60">{item.period}</p>
                                        <div className="w-[3px] h-4 bg-foreground/15 dark:bg-white/20 rounded-full"></div>
                                    </div>




                                    <div className="sm:pl-0 pl-2 sm:col-span-2 flex flex-col gap-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base md:text-lg font-semibold">{item.name}</p>

                                            {item.description.map((desc, i) => (
                                                <p key={i} className="text-base md:text-base font-normal text-foreground/60 whitespace-pre-wrap">{desc}</p>
                                            ))}

                                            {item.skills && item.skills.length > 0 && (
                                                <div className="flex gap-2 mt-1 flex-wrap ">
                                                    {item.skills.map((skill, i) => (
                                                        <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-50 shadow-sm dark:bg-white/10 dark:border-white/10 dark:backdrop-blur-md" title={skill.name}>
                                                            <img key={i} className="w-6 h-6  object-contain" src={skill.img} alt={skill.name} title={skill.name}  />
                                                        </div>
                                                        
                                                    ))}
                                                </div>
                                            )}

                                            {item.readme && (
                                                <div className="mt-1 pt-2">

                                                    <button onClick={() => toggleReadme(item.name)} className="flex items-center gap-1 text-sm text-foreground/60 transition group hover:text-[#40bbed] hover:dark:text-[#AD6CFF] px-2 ">
                                                        <IoIosArrowForward className={`text-[16px] transition-transform duration-300 ${openReadme === item.name ? "rotate-90" : ""}`}/>
                                                        {openReadme.includes(item.name) ? "닫기" : "자세히 보기"}
                                                    </button>

                                                    <div className={`transition-all duration-300 overflow-hidden ${openReadme.includes(item.name) ? "max-h-[600px] opacity-100 scale-y-100 translate-y-0 mt-3 border border-foreground/5 bg-foreground/2 rounded-lg p-3" : "max-h-0 opacity-0 scale-y-95 -translate-y-1 border border-transparent p-0"} `}>
                                                        <ul className="pl-6 space-y-2">
                                                            {item.readme.map((r, i) => (
                                                                <li key={i} className="text-[16px] text-foreground/60 leading-relaxed relative before:absolute before:-left-5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#40bbed]/65 dark:before:bg-[#AD6CFF]/80">{r}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            

        </section>
    )
};