"use client";

import { ProjectsData } from '../_data/ProjectsDetails/ProjectsData';
import ProjectCard from '../_components/ProjectCard';

export default function ProjectsSection(){

    return(
        <section id="projects" className='w-full mb-20 '>
            <div>
                <h2 className="section-index">프로젝트 상세</h2>
                <p className="section-label">주요 프로젝트의 세부 사항을 확인해보세요</p>

                <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
                    {ProjectsData.map((data) =>(
                        <ProjectCard key={data.id} project={data}/>
                    ))}

                </div>
            </div>
        </section>
    );
}

