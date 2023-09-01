import React, {  useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login({state,setState}) {

  

  return (
    <div className='login'>
      {
      state == 1  ?
        <>
            <Link  to="/signup" onClick={()=>setState(2)} ><button className='signuppp'>Sign up</button></Link> 
            <Link to="/signin" onClick={()=>setState(3)}><button className='signinnn'>Sign in</button></Link> 
        </>
        : state==2 ? <Link to="/signup" onClick={()=>setState(3)} ><button className='signuppp'>Sign up</button></Link> :
        state ==3 ? <Link to="/signin" onClick={()=>setState(2)}><button className='signinnn'>Sign in</button></Link> : null
      }
      
    </div>
  )
}

export default Login