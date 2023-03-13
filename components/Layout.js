import {Link, Outlet} from "react-router-dom";
import * as React from 'react';

const Layout = () => {
  return(
    <div>
      <Outlet/>
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li> <Link to="/register">Register</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
    </div>
  )
}

export default Layout
