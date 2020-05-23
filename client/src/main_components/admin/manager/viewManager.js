// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRowManager';
import PureProgressSpinner from "../../../components/PureProgressSpinner";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store_managers: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:3000/store_managers/')
            .then(response => {
                this.setState({ store_managers: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

   


    tabRow() {
        return this.state.store_managers.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }



    render() {
        if (this.state.store_managers.length === 0) {
            return <PureProgressSpinner message="Loading Manager Details..." />
        }

        return (
            <div>
                <h3 align="center">Store manager list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead >
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table >

            </div >
        );
    }
}