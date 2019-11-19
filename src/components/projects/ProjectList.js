import React from 'react'
import ProjectSummary from './ProjectSummary'


const ProjectLists = ({projects}) => {
    return (
        <div className="row project-lists">
           { projects && projects.map(project=>{
              return(
                <ProjectSummary project={project} key={project.id} />
              )
           })}
        </div>
    )
}

export default ProjectLists