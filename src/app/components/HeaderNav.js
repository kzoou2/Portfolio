import { IoMenu } from "react-icons/io5";

export default function HeaderNav() {
    

    return(
        <header className="w-full sm:w-auto sticky top-4 z-50 px-3 sm:px-0">
            <div className="mb-10 w-full h-10 md:h-12 px-4 md:px-6 sm:pr-1.5 md:pr-2 bg-foreground/[0.08] backdrop-blur-lg rounded-full flex justify-between items-center gap-1.5 md:gap-2 dark:bg-light/10">
                
                <a className="no-underline" href="#top">
                    <div className="relative mr-4">
                        <div className="shape flex gap-2">
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#9BE200]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#F59E0B]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#40bbed]"></div>
                            <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#df6556]"></div>
                        </div>
                    </div>
                </a>

                <ul className="hidden sm:flex gap-1.5 md:gap-2 items-center list-none p-0 indent-0">
                    <a className="no-underline" href="#aboutme">
                        <li className="px-3 md:px-4 py-1.5 md:py-2 rounded-fullflex gap-0.5 items-center transition-colors">
                            <span className="text-xs md:text-sm font-semibold whitespace-nowrap text-foreground/60">
                                AboutMe
                            </span>
                        </li>
                    </a>
                    <a className="no-underline" href="#skills">
                        <li className="px-3 md:px-4 py-1.5 md:py-2 rounded-full flex gap-0.5 items-center transition-colors">
                            <span className="text-xs md:text-sm font-semibold whitespace-nowrap text-foreground/60">
                                Skill
                            </span>
                        </li>
                    </a>
                    <a className="no-underline" href="#projects">
                        <li className="px-3 md:px-4 py-1.5 md:py-2 rounded-full flex gap-0.5 items-center transition-colors">
                            <span className="text-xs md:text-sm font-semibold whitespace-nowrap text-foreground/60">
                                Projects
                            </span>
                        </li>
                    </a>
                </ul>

                <button className="block sm:hidden">
                    <IoMenu/>
                </button>
            </div>
        </header>
    )
};