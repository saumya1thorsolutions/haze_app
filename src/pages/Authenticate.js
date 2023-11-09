import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Authenticate = () => {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div classNameName="authenticate">
      <div classNameName="auth__left">
        <img
          src="/assets/shopifyLogo.jpg"
          alt="Instagram Screenshots"
        />
      </div>
      <div classNameName="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div classNameName="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
