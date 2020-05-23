// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRowCategory';
import PureProgressSpinner from "../../../components/PureProgressSpinner";
import backend_config from '../../../config/backend_config';

export default class IndexCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }


    componentDidMount() {
        axios.get(backend_config.baseURL + 'categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }


    tabRow() {
        return this.state.categories.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }



    render() {
        if (this.state.categories.length === 0) {
            return <PureProgressSpinner message="Loading category Details..." />
        }

        return (
            <div>
                <h3 align="center">Category list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Category Details</th>
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