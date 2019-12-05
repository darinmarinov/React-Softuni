import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <React.Fragment>
            <div className="card grey lighten-4">
                <div className="card-content black-text">
                    <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                </div>
                <div className="card-action">
                    <p> <span>Posted by: </span>{project.authorFirstName} {project.authorLastName}</p>
                      <p> <span>Posted at: </span>{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
       </React.Fragment>
    )
}

export default ProjectSummary