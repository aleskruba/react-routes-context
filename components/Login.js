import * as React from 'react';
import useAuth from './hooks/useAuth';
import {useNavigate,useLocation} from 'react-router-dom';

export default function Login() {

  const {auth, setAuth} = useAuth();
  const location = useLocation();
  

  return (
<div >
  <h1>LOGIN PAGE </h1>
  <h5>FOR ALL USERS </h5>
  <button onClick={()=>setAuth(!auth)}>Click </button>
  <p>{auth ? 'You are logged in':'You are logged out'}</p>
</div>

);
}
