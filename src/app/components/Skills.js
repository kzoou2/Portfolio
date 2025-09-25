"use client";
import { useState } from 'react';
import { SiSpringboot } from "react-icons/si";

export default function Skills(){

    const [activeCategory, setActiveCategory] = useState(null);

    const categories = ["Language", "FrontEnd", "BackEnd", "DB","Tools"];
    const skills = [
        { name: "JavaScript", img: "/image/Javascript.png", category:"Language" },
        { name: "Python", img: "/image/python.png", category:"Language" },
        { name: "HTML5", img: "/image/html5.png", category:"Language"  },
        { name: "CSS3", img: "/image/css3.png", category:"Language" },

        { name: "React", img: "/image/React.png", category:"FrontEnd" },
        { name: "Next.js", img: "/image/Nextjs.png",category:"FrontEnd" },
        { name: "Recoil", img: "/image/recoil.png", category:"FrontEnd" },

        { name: "Tailwind CSS", img: "/image/Tailwindcss.png", category:"FrontEnd" },
        { name: "Bootstrap", img: "/image/Bootstrap.png" , category:"FrontEnd"},

        { name: "Spring Boot", img: "/image/spring boot.png",category:"BackEnd" }, 
        { name: "Node.js",img: "/image/Node.png",category:"BackEnd" },
        { name: "Django", img: "/image/Django.png", category:"BackEnd" },
        { name: "MySQL", img: "/image/Mysql.png", category:"DB" },

        { name: "Github", img: "/image/github.png",category:"Tools" },
        { name: "Git", img: "/image/Git.png", category:"Tools" },
        { name: "Figma", img: "/image/Figma.png", category:"Tools" },
        { name: "Slack", img: "/image/Slack.png", category:"Tools" },
        { name: "Notion", img: "/image/Notion.png", category:"Tools" },
    ];

    const handleClick = (category) => {
            setActiveCategory(activeCategory === category ? null : category);
    };

    return(
        <section id='skills' className="">
            <div className='flex flex-col gap-7 items-center'>
                <div className="bg-gray-100 p-1.5 rounded-full flex items-center ">
                    {categories.map((cat) => (
                        <button key={cat} className="relative text-sm sm:text-base font-semibold px-3 py-1 rounded-full transition text-gray-400 hover:text-gray-600" onClick={() => handleClick(cat)}>
                            <span className={`relative z-10 ${activeCategory === cat ? "text-[#40bbed]" : ""}`}>
                                {cat}
                            </span>
                            {activeCategory === cat && (
                                <div className="absolute inset-0 bg-white rounded-full z-0"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-12 mb-20'>
                <div className="grid grid-cols-6 grid-rows-3 gap-5 justify-center max-w-full sm:max-w-4xl">
                    {skills.map((skill) => (
                        <div key={skill.name} className={`relative group/skill transition-all w-16 h-16 ${activeCategory && activeCategory !== skill.category  ? "blur-sm opacity-50" : "opacity-100"}`}>
                            <img src={skill.img} alt={skill.name} className="rounded-md shadow-md w-14 h-14  object-contain" />
                            <p className="absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-black/60 text-white rounded text-xs md:text-sm text-center whitespace-nowrap font-normal invisible z-10 group-hover/skill:visible">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
