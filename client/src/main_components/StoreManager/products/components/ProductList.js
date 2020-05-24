import React, { Component } from 'react';
import ProductRow from './ProductRow';
import baseAxios from '../../../../config/axios';
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        baseAxios.get('product')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productList() {
        return this.state.products.map(function (currentProduct, i) {
            return <ProductRow product={currentProduct} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Product List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock Amount</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Discount %</th>
                            <th>Discount info</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
