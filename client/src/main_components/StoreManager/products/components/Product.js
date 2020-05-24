import React, { Component } from 'react'
import baseAxios from '../../../../config/axios';

export default class Product extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductStockAmount = this.onChangeProductStockAmount.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onChangeDiscountPercentage = this.onChangeDiscountPercentage.bind(this);
        this.onChangeDiscountInfo = this.onChangeDiscountInfo.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            price: '',
            qty: '',
            image_path: '',
            category_id: '',

            discount_percentage: '',
            discount_info: '',

            categories: [],
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
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        baseAxios.get('categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeProductName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeProductDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeProductStockAmount(e) {
        this.setState({
            qty: e.target.value
        });
    }

    checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
            console.log("Inside checkUploadResult!");
            this.setState({
                image_path: resultEvent.info.secure_url,
            });
            console.log(this.state.image_path);
        }
    }

    showWidget = (widget) => {
        widget.open()
    }

    onChangeProductCategory(e) {
        this.setState({
            category_id: e.target.value
        });
    }

    onChangeDiscountPercentage(e) {
        this.setState({
            discount_percentage: e.target.value
        });
    }

    onChangeDiscountInfo(e) {
        this.setState({
            discount_info: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            qty: this.state.qty,
            image_path: this.state.image_path,
            category_id: this.state.category_id,

            discount_percentage: this.state.discount_percentage,
            discount_info: this.state.discount_info,
        };
        console.log(obj);
        baseAxios.post('product/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/dashboard');
    }

    render() {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: 'it18061376',
            uploadPreset: 'qjprkm48',
            sources: [
                "local",
                "url"
            ],
            multiple: false,
            cropping: true,
            resourceType: "image",
            clientAllowedFormats: ["png", "gif", "jpeg"],
            maxImageFileSize: 15000000
        },
            (error, result) => { this.checkUploadResult(result) }
        )

        return (
            <div className="">
                <div className="">
                    <h3>{this.state.name}</h3>
                    <img src={this.state.image_path} alt={this.state.name} height="300px" width="500px"></img>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label htmlFor="productName" className="col-sm-2 col-form-label">Product Name </label>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.name} onChange={this.onChangeProductName} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="productDescription" className="col-sm-2 col-form-label">Product Description </label>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.description} onChange={this.onChangeProductDescription} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="productPrice" className="col-sm-2 col-form-label">Product Price </label>
                        <div className="col-sm-10">
                            <input type="number" value={this.state.price} onChange={this.onChangeProductPrice} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="productStock" className="col-sm-2 col-form-label">Stock Amount </label>
                        <div className="col-sm-10">
                            <input type="number" value={this.state.qty} onChange={this.onChangeProductStockAmount} min="1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="productImage" className="col-sm-2 col-form-label">Change Image </label>
                        <div className="col-sm-10">
                            <button type="button" onClick={() => this.showWidget(widget)}>Upload Image</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="productCategory" className="col-sm-2 col-form-label">Product Category </label>
                        <div className="col-sm-10">
                            <select onChange={this.onChangeProductCategory}>
                                {this.state.categories.map((i) => (<option key={i._id} {...i}>{i.name}</option>))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="discountPercentage" className="col-sm-2 col-form-label">Discount Percentage </label>
                        <div className="col-sm-10">
                            <input type="number" value={this.state.discount_percentage} onChange={this.onChangeDiscountPercentage} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="discountInfo" className="col-sm-2 col-form-label">Discount Info </label>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.discount_info} onChange={this.onChangeDiscountInfo} />
                        </div>
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
