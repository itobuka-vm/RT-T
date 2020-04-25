//import React library
import React from "react"

//render JSX into a DOM element
function Product(props) {
  return (
    <div className='product-container'>
      <ul>
        <li>
          <img src={props.imgUrl} alt={props.imgAlt} className='product-img' />
          <p>Product: {props.name}</p>
          <p>Price: {props.price}</p>
        </li>
      </ul>
    </div>
  )
}

export default Product
