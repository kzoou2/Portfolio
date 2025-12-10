"use client";
import { useState } from 'react';
import { SiSpringboot } from "react-icons/si";

export default function SkillsSection(){

    const [activeCategory, setActiveCategory] = useState(null);

    const categories = ["Language", "FrontEnd", "BackEnd", "DB","Tools"];
    const skills = [
        { name: "JavaScript", img: "/icons/Javascript.svg", category:"Language" },
        { name: "Python", img: "/icons/Python.svg", category:"Language" },
        { name: "HTML5", img: "/icons/Html5.svg", category:"Language"  },
        { name: "CSS3", img: "/icons/Css3.svg", category:"Language" },

        { name: "React", img: "/icons/React.svg", category:"FrontEnd" },
        { name: "Next.js", img: "/icons/Nextjs.svg",category:"FrontEnd" },
        { name: "Tailwind CSS", img: "/icons/Tailwindcss.svg", category:"FrontEnd" },
        { name: "Bootstrap", img: "/icons/Bootstrap.svg" , category:"FrontEnd"},

        { name: "Spring Boot", img: "/icons/Springboot.svg",category:"BackEnd" }, 
        { name: "Node.js",img: "/icons/Node.svg",category:"BackEnd" },
        { name: "Django", img: "/icons/Django.svg", category:"BackEnd" },
        { name: "MySQL", img: "/icons/Mysql.svg", category:"DB" },

        { name: "Github", img: "/icons/Github.svg",category:"Tools" },
        { name: "Git", img: "/icons/Git.svg", category:"Tools" },
        { name: "Vercel", img: "/icons/Vercel.svg", category:"Tools" },
        { name: "Figma", img: "/icons/Figma.svg", category:"Tools" },
        { name: "Slack", img: "/icons/Slack.svg", category:"Tools" },
    ];

    const handleClick = (category) => {
            setActiveCategory(activeCategory === category ? null : category);
    };

    return(
        <section id='skills' className="w-full scroll-mt-[15vh] mb-20">
            <div>
                <h2 className="section-index">기술 스택 및 도구</h2>
                <p className="section-label">아래 기술 사용할 수 있습니다.</p>

                <div className='flex flex-col gap-7 items-center mt-12 '>
                    <div className="bg-gray-100 p-1.5 rounded-full flex items-center dark:bg-[#202027]">
                        {categories.map((cat) => (
                            <button key={cat} className="relative text-sm sm:text-base font-semibold px-3 py-1 rounded-full transition text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => handleClick(cat)}>
                                <span className={`relative z-10 ${activeCategory === cat ? "text-[#40bbed] dark:text-[#AD6CFF]" : ""}`}>
                                    {cat}
                                </span>
                                {activeCategory === cat && (
                                    <div className="absolute inset-0 rounded-full z-0 bg-white dark:bg-white/10 dark:backdrop-blur-sm dark:border-white/10"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center mt-12 mb-20'>
                    <div className="grid grid-cols-5 grid-rows-3 gap-3 sm:gap-5 justify-center max-w-full sm:max-w-4xl">
                        {skills.map((skill) => (
                            <div key={skill.name} className={`relative group/skill transition-all w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl ${activeCategory && activeCategory !== skill.category  ? "blur-sm opacity-50" : "opacity-100"}
                                                        shadow-md dark:bg-white/10 dark:border dark:border-white/10 dark:backdrop-blur-md`}>
                                <img src={skill.img} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                                <p className="absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-black/60 text-white rounded text-xs md:text-sm text-center whitespace-nowrap font-normal invisible z-10 group-hover/skill:visible
                                dark:text-gray-100 dark:bg-white/20 transition-colors duration-300">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}
