import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar({
  title = "Default Title",
  about = "Default About",
  landing,
  mode,
  toggleMode
}) {
  // param => props ; usage => props.title , props.about , props.landing
  if (typeof title !== "string") {
    console.warn("Navbar: title should be string");
    title = "Insert Title"; // fallback -- like if number nikla to yah print hoga
  }

  if (typeof about !== "string") {
    console.warn("Navbar: about should be string");
    about = "Insert About";
  }

  if (landing === undefined) {
    // React props me default case undefined hota hai agar parent ne pass nahi kiya.
    console.warn("Landing page should have a title");
    landing = "Landing Page";
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="#">
          {title}
        </Link> */}
        {/* <a className="navbar-brand" href="/">
          {title}
        </a> */}
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                {landing}
              </Link> */}
              {/* <a className="nav-link active" aria-current="page" href="/">
                {landing}
              </a> */}
              <a className="nav-link active" aria-current="page" href="#">
                {landing}
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {about}
              </Link> */}
              {/* <a className="nav-link" href="/about">
                {about}
              </a> */}
            </li>
          </ul>
          <div className={`form-check form-switch text-${(mode==="light")?"dark":"light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
