import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"

//my components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeGuest from "./components/HomeGuest"
import About from "./components/About"
import Terms from "./components/Terms"
import Home from "./components/Home"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"

Axios.defaults.baseURL = "http://localhost:8080"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("app.Token")))
  const [flashMessages, setFlashMessage] = useState([])

  function addFlashMessage(message) {
    setFlashMessage((pre) => pre.concat(message))
  }

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages}></FlashMessages>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>

        <Route path="/create-post" element={<CreatePost addFlashMessage={addFlashMessage} />}></Route>
        <Route path="/post/:id" element={<ViewSinglePost />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

root.render(<Main />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
