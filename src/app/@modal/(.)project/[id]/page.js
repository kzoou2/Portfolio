import ProjectDetail from "@/app/_components/ProjectDetail";
import { ProjectsData } from "@/app/data/ProjectsDetails/ProjectsData";

export default function ProjectModalPage({ params }) {
    
    const project = ProjectsData.find(p => p.id == params.id);
    return <ProjectDetail project={project} />;
}

