import React from 'react'

export default function Navbar(props) {
  const navStyle={
    backgroundColor : props.mode ,
    color : props.mode=== "#107fff" ? "black" : "white" ,
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-body-dark-subtle " style={navStyle} >
  <div className={`container-fluid`} >
    <a className="navbar-brand" href="/"style={navStyle} >TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"style={navStyle} >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"style={navStyle} >Link</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={props.toggeleMode}  role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" style={navStyle}  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
  </div>
  </div>
</nav>  
    </>
  )
}
