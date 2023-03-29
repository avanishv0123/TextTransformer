import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (av) => {
  const [mode, setMode] = useState("Dark Mode");

  let enableDark = () => {
    if (document.getElementById("switchbox").checked) {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";

      setMode("Light Mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("Dark Mode");
    }
  };
  const cyanbg = () => {
    document.body.style.backgroundColor = "#4a69bd";
    document.body.style.color = "#fff";
  };

  const yellowbg = () => {
    document.body.style.backgroundColor = "#eb2f06";
    document.body.style.color = "#fff  ";
  };
  const greenbg = () => {
    document.body.style.backgroundColor = "#009432";
    document.body.style.color = "white ";
  };
  const redbg = () => {
    document.body.style.backgroundColor = "#ff5e57";
    document.body.style.color = "white ";
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              TextTransformer
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item ">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="bgcolors ">
                <input
                  type="button"
                  id="cyan"
                  className="btn btn-outline-none"
                  onClick={cyanbg}
                  style={{ backgroundColor: "#4a69bd" }}
                />

                <input
                  type="button"
                  id="yellow"
                  className="btn btn-outline-none"
                  onClick={yellowbg}
                  style={{ backgroundColor: "#eb2f06" }}
                />
                <input
                  type="button"
                  id="green"
                  className="btn btn-outline-none"
                  onClick={greenbg}
                  style={{ backgroundColor: "#009432" }}
                />
                <input
                  type="button"
                  id="red"
                  className="btn btn-outline-none"
                  onClick={redbg}
                  style={{ backgroundColor: "#ff5e57" }}
                />
              </div>

              <div className="form-check form-switch d-flex ml-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchbox"
                  onClick={enableDark}
                />
                <span className="text-light "> {mode}</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
