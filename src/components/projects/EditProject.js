import React, { Component } from 'react';

import firebase from '../../firebase';

import { Link } from 'react-router-dom';
import  moment from 'moment'
class EditProject extends Component {

   date = new Date().getDate();
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            content: '',
            authorFirstName: '',
            authorLastName: '',
            createdAt: moment().toDate()
        };

    }

    componentDidMount() {
        const ref = firebase.firestore().collection('projects').doc(this.props.match.params.id);
 
        ref.get().then((doc) => {
            if (doc.exists) {
            console.log(ref)
                const projects = doc.data();
                this.setState({
                    key: doc.id,
                    title: projects.title,
                    content: projects.content,
                    authorFirstName: projects.authorFirstName,
                    authorLastName: projects.authorLastName,
                    createdAt: moment(projects.createdAt.toDate()).calendar()

                });

            } else {
                console.log("No such document!");
            }

        });

    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ projects: state });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const { title, content } = this.state;
        const updateRef = firebase.firestore().collection('projects').doc(this.props.match.params.id);
        updateRef.set({
            title,
            content,
        }).then((docRef) => {
            this.setState({
                key: '',
                title: 'dddd',
                content: '',
            });
            this.props.history.push(`/dashboard`)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
   
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT BOARD
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/dashboard`} class="btn btn-primary">Board List</Link></h4>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
                        </div>
                        <div class="form-group">
                            <label for="content">Content:</label>
                            <input type="text" class="form-control" name="content" value={this.state.content} onChange={this.onChange} placeholder="Content" />
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
      </div >
    );

    }

}


export default EditProject;
