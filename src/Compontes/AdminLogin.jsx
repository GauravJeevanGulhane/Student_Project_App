import React from "react";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <>
      <br />
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
          <Link to="/Navbar">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
export default AdminLogin;
