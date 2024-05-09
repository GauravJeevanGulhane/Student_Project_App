import React from "react";

let LoginForm = () => {
  return (
    <>
      <center>
        <div className="login">
          <h1>Student Login</h1>
          <input type="text" placeholder="Username" name="name" value="" />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value=""
          />
          <br />
          <input type="submit" name="btn" />
        </div>
      </center>
    </>
  );
};

export default LoginForm;
