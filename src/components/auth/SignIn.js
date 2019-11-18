import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
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
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
            <div className="title">
                <h3 className="center-align grey-text">Welcome!</h3>
            </div>
            <div className="row">
                <div className="col s12 l4 offset-l4">
                    <div className="card grey lighten-3">
                        <div className="card-content">
                            <h4 className="card-title center-align">Login</h4>
                            <form onSubmit={this.onSubmitForm}>
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
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Login <i className="material-icons right">send</i> </button>
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

export default SignIn
