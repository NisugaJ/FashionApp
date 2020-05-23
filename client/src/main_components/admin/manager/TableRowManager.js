// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Swal = require('sweetalert2');

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }


    delete() {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                axios.get('http://localhost:3000/store_managers/delete/' + this.props.obj._id)
                    .then(console.log('Deleted'))
                    .catch(err => console.log(err))

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    render() {
        return (
            <tr>
                <td>            {this.props.obj.first_name}</td>
                <td>            {this.props.obj.last_name}</td>
                <td>            {this.props.obj.username}</td>
                <td>            {this.props.obj.password}</td>
                <td>            {this.props.obj.email}</td>

                <td><Link to={"/dashboard/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link></td>
                <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td></tr>
        );
    }
}

export default TableRow;