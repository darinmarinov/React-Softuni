import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectLists = ({projects}) => {
    return (
        <div className="row project-lists">
           { projects && projects.map(project=>{
              return(
                <Link to={'project/'+project.id} key={project.id}>
                  <ProjectSummary project={project}  />
                </Link>
              )
           })}
        </div>
    )
}

export default ProjectLists