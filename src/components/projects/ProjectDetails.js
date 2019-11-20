import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Card Title {id}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                         I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className='card-action cyan darken-3'>
                    <div>Posted by The Darin Marinov</div>
                    <div>12 Septemper, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
