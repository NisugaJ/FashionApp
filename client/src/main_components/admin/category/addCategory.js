import React, { Component } from 'react';
import axios from 'axios';
// import apis from '../../../api';
const Swal = require('sweetalert2');

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            description: this.state.description

        };

        //    apis.addAdmin(obj);

        axios.post('http://localhost:3000/categories/add', obj)
            .then(
                res => console.log(res.data),
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,

                })
            );


        this.setState({
            name: '',
            description: ''
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <h3>Add New Categories</h3>
                        <form onSubmit={this.onSubmit} method="POST" action="sent">
                            <div className="form-group">
                                <label>Category Name:  </label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                            </div>
                            <div className="form-group">
                                <label>Category Description: </label>
                                <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Add Category" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}