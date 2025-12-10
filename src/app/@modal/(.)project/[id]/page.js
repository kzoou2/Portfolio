import ProjectDetail from "../../_components/ProjectDetail";
import { ProjectsData } from "@/app/_data/ProjectsDetails/ProjectsData";

export default function ProjectModalPage({ params }) {
    
    const project = ProjectsData.find(p => p.id == params.id);
    return <ProjectDetail project={project} />;
}

