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
            {/* <h2 className="text-4xl font-black text-white flex items-center mb-10">About Me</h2> */}
            <h2 className="section-index">핵심 역량 및 가치</h2>
            <p className="section-label">작은 디테일과 팀워크, 사용자 경험을 통해 의미 있는 결과물을 만들어갑니다.</p>

            {/* <div className="flex flex-col justify-center items-center h-[100vh] pt-4">
                
            </div> */}

            <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
                    <p className="font-semibold mb-2">프론트엔드 개발</p>
                    <p className="text-sm text-gray-600">
                    React.js와 JavaScript를 사용한 프론트엔드 개발 경험이 있으며, 
                    Next.js와 더불어 핵심적인 React library 활용 경험이 있습니다.
                    </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
                    <p className="font-semibold mb-2">커뮤니케이션 및 협업</p>
                    <p className="text-sm text-gray-600">
                    프로젝트 진행 시 기획, 디자인 등 다양한 직무를 경험하며, 다른 직군과 원활하게 소통하고 협업할 수 있습니다.
                    Github 이용한 협업 경험이 있으며, Slack, Notion 등의 협업 도구 사용 경험도 있습니다.
                    </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
                    <p className="font-semibold mb-2">UI 개선 및 사용자 경험</p>
                    <p className="text-sm text-gray-600">
                    프로젝트에서 사용자 흐름을 분석하고, 직관적인 화면 설계와 웹 성능 최적화를 경험했습니다.
                    사용자 중심의 웹 서비스 개발을 목표로 합니다.
                    </p>
                </div>
            </div>

            

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