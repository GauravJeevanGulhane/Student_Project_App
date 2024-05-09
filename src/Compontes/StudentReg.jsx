import React from "react";
import { Link } from "react-router-dom";

function StudentReg() {
  return (
    <>
    <h1>Register Page</h1>
        <br/>
      <div className="container">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="ID" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Contact" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Username" />
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
          </button>
          <br />
          Already Have an Acccount
          <Link to="/StudentLogin">
            <a href="#"> Login Here</a>
          </Link>
        </form>
      </div>
    </>
  );
}
export default StudentReg;
