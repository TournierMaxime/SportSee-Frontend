import React, { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from "./views/DashBoard"
import HorizontalNav from "./components/HorizontalNav"
import VerticalNav from "./components/VerticalNav"
import Error404 from "./utils/Error404"

const App = () => {
  return (
    <Fragment>
      <Router>
        <HorizontalNav />
        <VerticalNav />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
