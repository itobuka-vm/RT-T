import React from "react"

//FUNCTIONAL COMPONENT
function Car(props) {
  return (
    <div>
      <h3>{props.car.carBrand + " " + props.car.carName}</h3>
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

export default Car
