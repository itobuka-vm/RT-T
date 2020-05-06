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

export default Product
