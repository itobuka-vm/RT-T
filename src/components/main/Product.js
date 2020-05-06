//import React library
import React from "react"

//render JSX into a DOM element
// FUNCTIONAL COMPONENT
function Product(props) {
  return (
    <div className='product-container'>
      <ul>
        <li>
          <img
            src={props.product.imgUrl}
            alt={props.product.imgAlt}
            className='product-img'
          />
          <h3>{props.product.name}</h3>
          <p>Price: {props.product.price}</p>
          <p>Product description: {props.product.productDescription}</p>
        </li>
      </ul>
    </div>
  )
}

//CLASS BASED COMPONENT
/* class Product extends React.Component {
  render() {
    return (
      <div className='product-container'>
        <ul>
          <li>
            <img
              src={this.props.product.imgUrl}
              alt={this.props.product.imgAlt}
              className='product-img'
            />
            <h3>{this.props.product.name}</h3>
            <p>Price: {this.props.product.price}</p>
            <p>Product description: {this.props.product.productDescription}</p>
          </li>
        </ul>
      </div>
    )
  }
} */

export default Product
