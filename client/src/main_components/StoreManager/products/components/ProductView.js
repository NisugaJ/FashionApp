import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import baseAxios from '../../../../config/axios';

export default class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            price: '',
            qty: '',
            image_path: '',
            category_id: '',

            discount_percentage: '',
            discount_info: '',

            ratings: [],
        }
    }

    componentDidMount() {
        baseAxios.get('product/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    qty: response.data.qty,
                    image_path: response.data.image_path,
                    category_id: response.data.category_id,

                    discount_percentage: response.data.discount_percentage,
                    discount_info: response.data.discount_info,

                    ratings: response.data.ratings || [],
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container">

                <h2 className="d-flex justify-content-center">{this.state.name}</h2>

                <div className="row">

                    <div className="col-sm">

                        <div className="d-flex justify-content-center">Image may differ from actual product*</div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <img src={this.state.image_path} alt={this.state.name} height="300px" width="500px"></img>
                        </div>
                    </div>

                    <div className="col-sm">

                        <div className="d-flex justify-content-center"></div>
                        <br />
                        <div className="form-group row">
                            <label htmlFor="description" className="">
                                Description: {this.state.description}
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="price" className="">
                                Price: {this.state.price}
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="qty" className="">
                                Stock: {this.state.qty}
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="category_id" className="">
                                Category: {this.state.category_id}
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="discount_percentage" className="">
                                Discount Percentage: {this.state.discount_percentage}
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="discount_info" className="">
                                Discount Info: {this.state.discount_info}
                            </label>
                        </div>

                        <div className="row">
                            <div className="col-sm form-group row">
                                <select id="qty">
                                    <option value="1">1 unit</option>
                                    <option value="2">2 units</option>
                                    <option value="3">3 units</option>
                                    <option value="4">4 units</option>
                                    <option value="5">5 units</option>
                                    <option value="6">6 units</option>
                                    <option value="7">7 units</option>
                                    <option value="8">8 units</option>
                                    <option value="9">9 units</option>
                                    <option value="10">10 units</option>
                                </select>
                            </div>
                            <div className="col-sm">
                                <div className="form-group row"> <button type="button">Buy Now</button> </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group row"> <button type="button">Add to Cart</button> </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        {this.state.ratings.length !== 0 ? this.state.ratings.map((i) => (<div><h6 key={i._id} {...i}>{i.comment}</h6>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="read-only" value={i.value} readOnly />
                            </Box></div>
                        )) : null}
                    </div>
                </div>

            </div>
        )
    }
}