import React from 'react'
import error from "./images/gif.gif"

function ErrorElement() {
  return (
    <div style={{display:"grid", width:"100%", height:"30vh", placeItems:"center"}}>
<img src={error} />
    </div>
  )
}

export default ErrorElement