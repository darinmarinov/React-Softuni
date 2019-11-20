import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createrProject } from '../../store/actions/projectActions'
 
class CreateProject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: ''
        }

    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.createrProject(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h3 className="center-align grey-text">Welcome!</h3>
                </div>
                <div className="row">
                    <div className="col s12 l10 offset-l1">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <h4 className="card-title center-align">Create Project</h4>
                                <form onSubmit={this.onSubmitForm}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="text" placeholder='' id="title"  onChange={this.onChangeInput} />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="content" className="materialize-textarea" onChange={this.onChangeInput}></textarea>
                                            <label htmlFor="content">Content</label>
                                        </div>
                                    </div>
                                    <div className="row center-align">
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Create <i className="material-icons right">send</i> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
     return{
         createrProject: (project) => dispatch(createrProject(project))
     }
}

export default connect(null, mapDispatchToProps)(CreateProject)
