import React, {Component} from 'react' //import specific thing from react lib
import './product.css';

class Product extends Component{
    render() { // method in Component
        return (
            <div className="card product">                                  {/*bootstrap css, return container div el*/}
                <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>  {/* {javascript here} }*/}
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="#" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;