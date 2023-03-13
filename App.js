import * as React from 'react';
import { Form } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';


export default function App() {



  return (
    <div>
 
        <Routes>
            <Route path="/" element={<Layout />}>
          
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />


              <Route element={<RequireAuth/>}>
                <Route path="home" element={<Home />} />
              </Route>

              <Route path="*" element={<Missing/>} />
            </Route>
        </Routes>

    </div>
  );
}
