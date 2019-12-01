import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
 
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props;

        if(auth.uid) return <Redirect to="/"/>
        return (
            <React.Fragment>
            <div className="row">
            <div className="title">
                <h3 className="center-align grey-text">Register New User</h3>
            </div>
                <div className="col s12 l4 offset-l4">
                    <div className="card grey lighten-3">
                        <div className="card-content">
                            <h4 className="card-title center-align">Register</h4>
                            <form onSubmit={this.onSubmitForm} id="reg-form">
                            <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input type="text" placeholder='' id="firstName" className="validate" onChange={this.onChangeInput}/>
                                        <label htmlFor="firstName">First Name:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input type="text" placeholder='' id="lastName" className="validate" onChange={this.onChangeInput}/>
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input type="email" placeholder='' id="email" className="validate" onChange={this.onChangeInput}/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">vpn_key</i>
                                        <input type="password" placeholder="" id="password" className="validate" onChange={this.onChangeInput}/>
                                        <label htmlFor="email">Password</label>
                                    </div>
                                </div>
                                <div className="row center-align">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Register <i className="material-icons right">send</i> </button>
                                </div>
                                <div>
                                    {
                                        authError ? <p>{authError}</p> : null
                                    }
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

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dipsatch) => {
    return{
        signUp: (newUser) => dipsatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
