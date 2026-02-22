import React from "react";
import projectsData from "@/constants/project";

export default function Projects(){
    return(
        <section 
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl">projects</h2>
            {projectsData.map((project)=>(
                <div key={project.id} className="mb-6">
                    <h2>{project.title}</h2>
                    <p>{project.tip}</p>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    )
}