import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            fields: {},
            errors: {}
        }

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    onChangeInput = (e) => {     
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        if(!this.handleValidation()){
            this.props.signUp(this.state)
         }else{
            alert("Form has errors.")
         }
    }

    render() {
        const { auth, authError } = this.props;

        if (auth.uid) return <Redirect to="/" />
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
                                            <input type="text" placeholder='' id="firstName" className="validate" onChange={this.onChangeInput} />
                                            <label htmlFor="firstName">First Name:</label>
                                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input type="text" placeholder='' id="lastName" className="validate" onChange={this.onChangeInput} />
                                            <label htmlFor="lastName">Last Name</label>                                         
                                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input type="email" placeholder='' id="email" className="validate" onChange={this.onChangeInput} />
                                            <label htmlFor="email">Email</label>
                                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">vpn_key</i>
                                            <input type="password" placeholder="" id="password" className="validate" onChange={this.onChangeInput} />
                                            <label htmlFor="password">Password</label>
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
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dipsatch) => {
    return {
        signUp: (newUser) => dipsatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
