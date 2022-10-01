import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./conteiners/Home"
import User from "./conteiners/User"

function myRoutes() {

    return (
        <Router>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/usuarios" element={<User/> } />
            </Routes>


        </Router>
    )
}

export default myRoutes