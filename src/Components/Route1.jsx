import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import SignUp from './Login';
import SignIn from './Signin';
import Products from './Products';
import Addtocart from './Addtocart';
import ContactForm from './Contactus';




function Route1() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' Component={Home} />
          <Route path='/profile' Component={Profile} />
          <Route path='/signUp' Component={SignUp} />
          <Route path='/signIn' Component={SignIn} />
          <Route path='/product' Component={Products} />
          <Route path='/cart' Component={Addtocart} />
          <Route path='/contactus' Component={ContactForm} />
         
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Route1
