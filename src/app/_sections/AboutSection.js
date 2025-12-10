
import { AboutData } from "../data/AboutData";
// import Logo from "../../../public/Logo";

export default function AboutSection(){
    const interview = [
        {Q: "왜?", A:"~~"},
        {Q: "무엇?", A:"~~"},
        {Q: "어떤?", A:"~~"}
    ]
    return(
        <section id="about" className="w-full py-20 scroll-mt-[20vh] mb-20 ">

            <h2 className="section-index">핵심 역량 및 가치</h2>
            <p className="section-label">작은 디테일과 팀워크, 사용자 경험을 통해 의미 있는 결과물을 만들어갑니다.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 justify-items-center lg:justify-items-stretch">
                {AboutData.map((item, i) =>(
                    <div key={i} className="w-[350px] lg:w-auto p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-[#202027] flex flex-col items-center lg:items-start">
                        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                        </div>
                        <h3 className="font-semibold text-lg md:text-xl mb-2 text-center lg:text-left">{item.title}</h3>
                        <p className="text-sm font-normal leading-normal text-foreground/60 text-center lg:text-left">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* <div className="w-full h-[1px] bg-foreground/15 items-center  mt-12 mb-8"></div> */}


        </section>
        

    )
}