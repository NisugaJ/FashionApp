// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';
import backend_config from '../../../config/backend_config';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: ''

        }
    }


    componentDidMount() {
        axios.get(backend_config.baseURL + 'store_managers/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    username: response.data.username,
                    password: response.data.password,
                    email: response.data.email,

                });
            }).catch(function (error) {
                console.log(error);
            })
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        })
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,

        };


        axios.post(backend_config.baseURL + 'store_managers/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        //push after the update to view page
        this.props.history.push('/dashboard/managers');
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <h3>Update Manager</h3>
                        <form onSubmit={this.onSubmit} method="POST" action="send">
                            <div className="form-group">
                                <label>First Name :  </label>
                                <input type="text" className="form-control" value={this.state.first_name} onChange={this.onChangeFirstName} />
                            </div>
                            <div className="form-group">
                                <label>Last Name: </label>
                                <input type="text" className="form-control" value={this.state.last_name} onChange={this.onChangeLastName} />
                            </div>
                            <div className="form-group">
                                <label>Username: </label>
                                <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChangeEmail} />
                            </div>
                            {/* <div className="form-group">
                        <label>Access Level: </label>
                        <input type="text" className="form-control"  value={this.state.access_token} onChange={this.onChangeAccessToken} />
                    </div> */}
                            <div className="form-group">
                                <input type="submit" value="Update Manager" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}