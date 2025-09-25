import { FaUser,FaCalendarAlt,FaPencilAlt,FaEnvelope,FaMapMarkerAlt,FaGithub  } from "react-icons/fa";
// import Logo from "../../../public/Logo";

export default function AboutMe(){
    const interview = [
        {Q: "왜?", A:"~~"},
        {Q: "무엇?", A:"~~"},
        {Q: "어떤?", A:"~~"}
    ]
    return(
        <section id="aboutme" className="w-full py-20  ">
            {/* <div className="h-[98vh] w-[95vw] mx-auto mt-[3vh] px-5 md:px-22 pt-16 rounded-t-[4rem] bg-white"> */}
            <h2 className="text-4xl font-black text-white flex items-center mb-10">About Me</h2>
            
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                            <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">이름</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">이경주</h4>
                        </div>
                    </div>

                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                            <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">생년월일</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">96. 03. 15</h4>
                        </div>
                    </div>

                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                            <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">거주지</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">인천광역시</h4>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                            <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v1l-10 6L2 7V6c0-1.1.9-2 2-2zm0 4.99l8 4.8 8-4.8V18H4z"/>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">이메일</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">email@naver.com</h4>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                            <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.1 2.4 2.6.4-.7.8-1.2 1.2-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.9 11.9 0 0 1 6.3 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.5.4 1 .9 1.4 1.9v2.8c0 .4.3.7.8.6A10.5 10.5 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z"/>
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">GitHub</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">github.com</h4>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-[10px] border border-gray-200 bg-white shadow-md p-4 dark:bg-navy-800 dark:border-[#ffffff33] dark:text-white">
                        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <svg className="w-6 h-6 text-brand-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5.14 10.47 3.5 9.6v3.55c0 2.35 3.57 4.3 8.5 4.3s8.5-1.95 8.5-4.3V9.6l-1.64.87a2 2 0 0 1-1.72 0L12 8l-6.86 2.47z"/>
                        </svg>

                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">전공</p>
                            <h4 className="text-lg font-bold text-navy-700 dark:text-white">의료IT마케팅</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center h-[100vh] pt-4">
                
            </div> */}
            <hr className="max-w-4xl mx-auto px-4 my-12 border-t border-gray-300" />
            {/* <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8"> 
                {interview.map((qna) =>(
                    <div key={qna.Q} className="rounded-[10px] bg-[#2A2A2A] shadow-m shadow-black/30 p-6">
                        
                        <p className="text-2xl font-bold mb-4 text-[#EAEAEA]">Q. {qna.Q} </p>
                        <p className="text-lg font-medium text-[#DDDDDD]">{qna.A}</p>
                    </div>
                ))}
            </div> */}
            <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8"> 
                {interview.map((qna) =>(
                    <div key={qna.Q} className="rounded-[10px]  shadow-m shadow-black/30 p-6  bg-background border border-foreground/15 md:rounded-lg flex flex-col justify-between gap-6 md:gap-0 group">
                        
                        <p className="text-2xl font-bold mb-4 text-navy-700 dark:text-white">Q. {qna.Q} </p>
                        <p className="text-lg font-medium  text-gray-600 dark:text-gray-300">{qna.A}</p>
                    </div>
                ))}
            </div>

        </section>
        

    )
}