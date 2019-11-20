import React from 'react'
import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { map } from '@firebase/util'

export class Dashboard extends React.Component{


    render(){
        
        const {projects} = this.props

        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m8'>
                      <ProjectLists projects={projects}></ProjectLists>
                    </div>
                    <div className='col s12 m3 offset-m1'>
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        projects: state.project.projects
    }
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "notifications" },
	])
)(Dashboard);