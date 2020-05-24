import React, { Component } from 'react';
import baseAxios from '../../../config/axios';
// import apis from '../../../api';
const Swal = require('sweetalert2');

export default class CreateManager extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeAccessToken = this.onChangeAccessToken.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: '',
            // access_token: ''
        }
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
            email: this.state.email
        };

        if (obj.first_name === '' || obj.last_name === '' || obj.username === '' || obj.password === '' || obj.email === '') {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fill all the fields',
                showConfirmButton: false,

            })

            console.log('error');
        } else {
            baseAxios.post( 'store_managers/add', obj)
                .then(
                    res => console.log(res.data),
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added Manager Successfully',
                        showConfirmButton: false,

                    })
                );


        }

        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: '',
            // access_token: '',
        })

    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <h3>Add New Manager</h3>
                        <form onSubmit={this.onSubmit} method="POST" action="send">
                            <div className="form-group">
                                <label>First Name:  </label>
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
                            <div className="form-group">
                                <input type="submit" value="Add Manager" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}