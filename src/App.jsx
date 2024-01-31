import React, { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./views/Profile"
import HorizontalNav from "./components/HorizontalNav"
import Error404 from "./utils/Error404"
import Home from "./views/Home"

const App = () => {
  return (
    <Fragment>
      <Router>
        <HorizontalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
