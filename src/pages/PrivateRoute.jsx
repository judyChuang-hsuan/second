import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Redirect} from "react-router-dom";
const PrivateRoute = ({component:Component,...rest}) => {
  const isLoggedIn=useSelector((state)=>state.loggedIn)
    return (
    <Route {...rest} render={props=>render isLoggedIn?(
        <Component {...props}/>):(<Redirect to=/>)
    }></Route>
  )
}

export default PrivateRoute