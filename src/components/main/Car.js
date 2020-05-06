import React from "react"

//FUNCTIONAL COMPONENT
function Car(props) {
  return (
    <div>
      <h2>{props.car.carBrand + " " + props.car.carName}</h2>
      <img
        src={props.car.carImgUrl}
        alt='default'
        style={{ width: "250px", height: "250px" }}
      />
      <p>Year: {props.car.carYear}</p>
      <p>
        Price:{" "}
        {props.car.carPrice.toLocaleString("sr-RS", {
          style: "currency",
          currency: "EUR"
        })}
      </p>
    </div>
  )
}

//CLASS BASED COMPONENT
/* class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.car.carBrand + " " + this.props.car.carName}</h2>
        <img
          src={this.props.car.carImgUrl}
          alt='default'
          style={{ width: "250px", height: "250px" }}
        />
        <p>Year: {this.props.car.carYear}</p>
        <p>
          Price:{" "}
          {this.props.car.carPrice.toLocaleString("sr-RS", {
            style: "currency",
            currency: "EUR"
          })}
        </p>
      </div>
    )
  }
} */

export default Car
