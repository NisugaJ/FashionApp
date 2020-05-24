import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import baseAxios from '../../../../config/axios';

export default class ProductRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        baseAxios.get('product/deleteProduct/' + this.props.product._id)
            .then((res) => {
                console.log('Product successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    getOneProduct(id) {
        baseAxios.post('product/oneProduct/' + id)
            .then(() => {
                console.log('Product viewed !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.description}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.qty}</td>
                <td><img src={this.props.product.image_path} alt="" height="50px" width="50px"></img></td>
                <td>{this.props.product.category_id}</td>
                <td>{this.props.product.discount_percentage}</td>
                <td>{this.props.product.discount_info}</td>
                <td>
                    <Link to={"/dashboard/oneProduct/" + this.props.product._id}>View</Link>
                    <br></br>
                    <Link to={"/dashboard/edit/" + this.props.product._id}>Edit</Link>
                    <br></br>
                    <button onClick={this.deleteProduct}>Delete</button>
                </td>
            </tr>
        );
    }
}