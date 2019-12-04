import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="col s12 m6">
            <div className="card grey lighten-4">
                <div className="card-content black-text">
                    <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                </div>
                <div className="card-action">
                    <p>Posted by:{project.authorFirstName} {project.authorLastName}</p>
                      <p>Posted at:{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary