
import { AboutData } from "../Data/AboutData";
// import Logo from "../../../public/Logo";

export default function AboutMe(){
    const interview = [
        {Q: "왜?", A:"~~"},
        {Q: "무엇?", A:"~~"},
        {Q: "어떤?", A:"~~"}
    ]
    return(
        <section id="aboutme" className="w-full py-20 scroll-mt-[20vh] mb-20 ">

            <h2 className="section-index">핵심 역량 및 가치</h2>
            <p className="section-label">작은 디테일과 팀워크, 사용자 경험을 통해 의미 있는 결과물을 만들어갑니다.</p>

            <div className="grid sm:grid-cols-3 gap-6 mt-15 ">
                {AboutData.map((item, i) =>(
                    <div key={i} className="p-4 bg-white rounded-lg shadow hover:shadow-md dark:bg-[#202027]">
                    <h3 className="font-semibold text-lg md:text-xl mb-2">{item.title}</h3>
                    <p className="text-sm font-normal leading-normal text-foreground/60">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* <div className="w-full h-[1px] bg-foreground/15 items-center  mt-12 mb-8"></div> */}


        </section>
        

    )
}