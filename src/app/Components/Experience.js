import { ExperienceData } from "../Data/ExperienceData";

export default function Experience(){

    const grouped = ExperienceData.reduce((acc, item)=>{
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    return(
        <section id='experience' className="w-full scroll-mt-[10vh]">
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

                                    <div className="flex gap-2.5 sm:justify-end justify-start items-center mb-1 sm:mb-3">
                                        <p className="text-sm md:text-base text-foreground/60">{item.period}</p>
                                    </div>


                                    <div className="sm:pl-0 pl-2 sm:col-span-2 flex flex-col gap-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base md:text-lg font-semibold">{item.name}</p>

                                            {item.description.map((desc, i) => (
                                                <p key={i} className="text-base md:text-base font-normal text-foreground/60 whitespace-pre-wrap">{desc}</p>
                                            ))}

                                            {item.skills && item.skills.length > 0 && (
                                                <div className="flex gap-2 mt-1 flex-wrap">
                                                    {item.skills.map((skill, i) => (
                                                        <img key={i} className="w-6 h-6 " src={skill.img} alt={skill.name} title={skill.name}  />
                                                    ))}
                                                </div>
                                            )}
                                            {/* {item.readme && (
                                                <ul className="list-disc pl-5 text-sm md:text-sm text-foreground/60">
                                                {item.readme.map((r, i) => (
                                                    <li key={i}>{r}</li>
                                                ))}
                                                </ul>
                                            )} */}
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