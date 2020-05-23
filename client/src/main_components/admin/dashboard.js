

import React, { Component } from 'react';
import axios from 'axios';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store_managers: [],
            categories: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:3000/store_managers')
            .then(response => {
                this.setState({ store_managers: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })


        axios.get('http://localhost:3000/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    render() {

        return (
            <div>
                <h3 align="center">Dashboard</h3>


                <div className="row mt-5 ">
                    <div className="col-6">

                        <div className="card col-8 bg-dark">
                            <div className="card-header text-warning" >
                                No of Managers
                            </div>
                            <div className="card-body">
                                
                                <p className="card-text text-warning">{this.state.store_managers.length}</p>
                                
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-6">

                        <div className="card col-8 bg-dark">
                            <div className="card-header text-warning">
                                No of Categories
                            </div>
                            <div className="card-body">
                                
                                <p className="card-text text-warning">{this.state.categories.length}</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div >
        );
    }
}