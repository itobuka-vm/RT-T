//import React library
import React from "react"

//render JSX into a DOM
function HeaderInfo() {
  return (
    <div className='header-info'>
      <p>Company Name</p>
      <p>Company Address</p>
      <p>Company Email and Phone</p>
      <p>
        Language
        <select>
          <option>Srpski</option>
          <option>Espanol</option>
        </select>
      </p>
    </div>
  )
}

//export HeaderInfo component
export default HeaderInfo
