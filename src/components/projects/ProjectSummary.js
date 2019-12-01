import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                </div>
                <div className="card-action">
    <p>Posted by:{project.authorFirstName} {project.authorLastName}</p>
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary