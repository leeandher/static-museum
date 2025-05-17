import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="guest" onClick={() => props.anonAuthenticate()}>
      Log in as Guest <br />
    </button>
  </nav>
);

Login.propTypes = {
  anonAuthenticate: PropTypes.func.isRequired,
};

export default Login;
