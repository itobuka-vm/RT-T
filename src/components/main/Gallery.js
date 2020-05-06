//import React library
import React from "react"

//render JSX into a DOM
//FUNCTIONAL COMPONENT
function Gallery() {
  return (
    <div className='gallery'>
      <h3>Gallery Section</h3>
    </div>
  )
}

//CLASS BASED COMPONENT
/* class Gallery extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <h3>Gallery Section</h3>
      </div>
    )
  }
} */

//export MainGallery component
export default Gallery
