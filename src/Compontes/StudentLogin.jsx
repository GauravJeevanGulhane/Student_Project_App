import React from "react";
import { Link } from "react-router-dom";

function StudentLogin() {
  return (
    <>
    <h1>Login Page</h1>
      <br/>
      <div className="container">
        <form>
          <div class="mb-3">
            <input
              type="username"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button><br/>
          Don't Have an Account <Link to="/StudentReg"><a href="#"> Registration Here</a></Link>
        </form>
      </div>
    </>
  );
}
export default StudentLogin;
