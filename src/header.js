import React, { Fragment } from 'react'
import {  Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { logoutdriver } from './actions/authactions'
import './App.css'

const Header = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logoutdriver());
    }

    return (
        <Fragment>
           
             
                
<div className="navbar">
      {user  ? (<div>
        {/* <h1 className="heading">Welcome to app</h1> */}

       {user&& user.role==="admin" &&(
         <Link to="/dashboard"  >Dashboard</Link>
      
       )}
       <hr/>
  <Link className="text-danger" to="/" onClick={logoutHandler}>
      Logout
     </Link>
     {/* <Link to="/profile">profile</Link> */}

     </div>  ) :   (
                        <Fragment>
       <h1 className="heading">Welcome to  app</h1>
                          {/* <a onClick={()=>{window.location.href="./login"}} >Login</a> */}
                          <Link to="/login"  >login</Link>
                          <hr />
                          <Link to="/register"  >signup</Link>
                          <hr />
     <Link to="/profile">profile</Link>
                        </Fragment>
                       )} 


</div>
                </Fragment> 

      
    )
}

export default Header