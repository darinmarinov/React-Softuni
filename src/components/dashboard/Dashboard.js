import React from 'react'
import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectList'

export class Dashboard extends React.Component{


    render(){
        return(
            <div className='dashboard container'>
                <divc className='row'>
                    <div className='col s12 m8'>
                      <ProjectLists></ProjectLists>
                    </div>
                    <div className='col s12 m3 offset-m1'>
                        <Notifications></Notifications>
                    </div>
                </divc>
            </div>
        )
    }
}

export default Dashboard