import React, { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./views/Profile"
import HorizontalNav from "./components/HorizontalNav"
import Error404 from "./utils/Error404"

const App = () => {
  return (
    <Fragment>
      <Router>
        <HorizontalNav />
        <Routes>
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
