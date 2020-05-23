import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Product from "./products/components/Product";
import ProductInput from "./products/components/ProductInput";
import ProductList from "./products/components/ProductList";
import ProductView from "./products/components/ProductView";

const StoreManagerDashboard = () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/dashboard" className="nav-link">Product List</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/dashboard/create" className="nav-link">Add Product</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <Route path="/dashboard" exact component={ProductList} />
                <Route path="/dashboard/oneProduct/:id" component={ProductView} />
                <Route path="/dashboard/edit/:id" component={Product} />
                <Route path="/dashboard/create" component={ProductInput} />
            </div>
        </Router>
    )
}

export default StoreManagerDashboard