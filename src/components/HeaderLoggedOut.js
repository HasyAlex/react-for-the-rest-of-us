import Axios from "axios"
import React, { useEffect, useState } from "react"

function HeaderLoggedOut(prop) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const responce = await Axios.post("/login", { username, password })
      console.log(responce.data)
      localStorage.setItem("app.Token", responce.data.token)
      localStorage.setItem("app.UserName", responce.data.username)
      localStorage.setItem("app.Avatar", responce.data.avatar)
      prop.setLoggedIn(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="mb-0 pt-2 pt-md-0" onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={(e) => setUsername(e.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={(e) => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLoggedOut
