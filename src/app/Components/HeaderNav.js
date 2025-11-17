"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function HeaderNav() {
    const [isOpen, setIsOpen ]= useState(false);

    return(
        <header className="w-full sm:w-auto sticky top-4 z-20 px-3 sm:px-0">
            {/* <div className="mb-10 w-full h-10 md:h-12 px-4 md:px-6 sm:pr-1.5 md:pr-2 bg-foreground/[0.08] backdrop-blur-lg rounded-full flex justify-between items-center gap-1.5 md:gap-2 dark:bg-light/10"> */}
                        <div className="mb-10 w-full h-10 md:h-12 px-4 md:px-6 sm:pr-1.5 md:pr-2 bg-foreground/[0.08] backdrop-blur-lg rounded-full flex justify-between items-center gap-1.5 md:gap-2 dark:bg-[#]">
                <a className="no-underline" href="#top">
                    <div className="relative mr-4">
                        <div className="shape flex gap-2">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#9BE200] dark:bg-[#8DFC7F]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#F59E0B] dark:bg-[#FFEA00]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#40bbed] dark:bg-[#3ECFFF]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#df6556] dark:bg-[#AD6CFF]"></div>
                        </div>
                    </div>
                </a>


                <ul className="hidden sm:flex gap-1.5 md:gap-2 items-center list-none p-0 indent-0">
                    {["AboutMe", "Skill", "Experience", "Projects"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="no-underline">
                        <li className="px-3 md:px-4 py-1.5 md:py-2 rounded-full flex gap-0.5 items-center transition-colors">
                            <span className="text-xs md:text-sm font-semibold whitespace-nowrap text-foreground/60">
                            {item}
                            </span>
                        </li>
                        </a>
                    ))}
                </ul>

                <button className="block sm:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>


            {isOpen && (
                <ul className="mobile-menu absolute top-12 left-1 right-1 h-fit px-5 py-4 mt-2 flex flex-col sm:hidden indent-0 bg-foreground/[0.07] backdrop-blur-lg list-none pointer-events-auto shadow-lg" style={{ clipPath: "inset(0% round 16px)" }}>
                    {["AboutMe", "Skill", "Experience", "Projects"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="mobile-menu-item no-underline" onClick={() => setIsOpen(false)}>
                            <li className="py-2.5 text-base font-semibold whitespace-nowrap text-foreground/80 ">
                                {item}
                            </li>
                        </a>
                    ))}
                </ul>
            )}
        </header>
    )
};