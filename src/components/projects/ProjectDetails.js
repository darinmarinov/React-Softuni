import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const {project, auth} = props;
    if(!auth.uid) return <Redirect to="/signin"/>
    if(project){
        return(
            <div className='container section project-details'>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className='card-action cyan darken-3'>
                    <div>Posted by {project.authorFirstName}{project.authorLastName}</div>
                    <div>12 Septemper, 2am</div>
                </div>
            </div>
        </div>
        )
   } else{
    return (
       <div className="container center">
           <p>Loading project</p>
       </div>
     )
   }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project : project,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
