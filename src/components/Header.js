import React from "react"
import { Link } from "react-router-dom"
import HeaderLoggedIn from "./HeaderLoggedIn"
import HeaderLoggedOut from "./HeaderLoggedOut"

function Header(porps) {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {porps.loggedIn ? <HeaderLoggedIn setLoggedIn={porps.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={porps.setLoggedIn} />}
      </div>
    </header>
  )
}

export default Header
