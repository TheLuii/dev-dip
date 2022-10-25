import React from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import {Home} from '../pages/home/Home'
import {Iphone} from "../pages/iphone/Iphone"
import {Cart} from "../pages/cart/cart"

export function Nav() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' exac element={<Home/>}/>
            <Route path='/iphone' exac element={<Iphone/>}/>
            <Route path='/cart' exac element={<Cart/>}/>
            <Route
        path="/"
        element={<Navigate to="/home" replace />}
    />
        </Routes>
    </BrowserRouter>
  )
}
