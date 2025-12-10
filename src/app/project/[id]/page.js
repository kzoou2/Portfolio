import React from "react";
import ProjectDetail from "@/app/_components/ProjectDetail";
import { ProjectsData } from "@/app/data/ProjectsDetails/ProjectsData";

export default function ProjectPage({ params }) {
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;

    const project = ProjectsData.find(p => p.id == id);
    return <ProjectDetail project={project} />;
}