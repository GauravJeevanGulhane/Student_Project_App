import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <center>
        <div
          className="container"
          style={{
            border: "1px solid black",
            width: "50%",
            height: "250px",
            margin: "12%",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Student Management</h1>
          <Link to="/AdminLogin">
            <button
              type="button"
              class="btn btn-primary m-3"
              style={{ height: "100px", fontSize: "40px" }}
            >
              Admin Login
            </button>
          </Link>

          <Link to="/StudentLogin">
            <button
              type="button"
              class="btn btn-primary m-3"
              style={{ height: "100px", fontSize: "40px" }}
            >
              Student Login
            </button>
          </Link>
        </div>
      </center>

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
           <h1>Student Management</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item mt-3" >
                <Link to="/AdminLogin" class="nav-link">
                  <h1>Admin Login</h1>
                </Link>
              </li>
              <li class="nav-item m-3">
                <Link to="/StudentLogin" class="nav-link">
                  <h1>Student Login</h1>
                </Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav> */}
    </>
  );
}
export default Welcome;
