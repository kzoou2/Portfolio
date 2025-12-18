"use Client";
import {IoMailOutline, IoLogoGithub } from "react-icons/io5";

export default function Footer(){
    return(
        <footer className="mt-20 mb-20 px-4 text-center">
            <p className="text-sm text-foreground/60 leading-relaxed">
                여기까지 읽어주셔서 감사합니다<br />
                궁금한 점이 있다면 언제든 편하게 연락 주세요
            </p>
    
            <div className="mt-6 text-sm flex justify-center">
                <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                        <IoMailOutline className="text-[20px] text-foreground/40" />
                        <span className="text-foreground ">joou3982@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <IoLogoGithub className="text-[20px] text-foreground/40" />
                        <a href="https://github.com/kzoou2" target="_blank" className="text-foreground hover:underline underline-offset-4" >
                            @kzoou2
                        </a>
                    </div>
                </div>
            </div>
        </footer>










    )
}
