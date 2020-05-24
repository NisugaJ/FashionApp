// edit.component.js

import React, { Component } from 'react';
import baseAxios from '../../../config/axios';

export default class Edit extends Component {
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



    componentDidMount() {
        baseAxios.get("categories/edit/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,

                });
            }).catch(function (error) {
                console.log(error);
            })
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


        baseAxios.post('categories/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        //push after the update to view page
        this.props.history.push('/dashboard/categories');
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
                                <input type="submit" value="Update Category" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}