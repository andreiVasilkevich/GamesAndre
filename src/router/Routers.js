
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import AllFoods from '../pages/AllFoods'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetails from '../pages/FoodDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/foods' element={<AllFoods />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/details' element={<FoodDetails />} />
        </Routes>
    )
}

export default Routers