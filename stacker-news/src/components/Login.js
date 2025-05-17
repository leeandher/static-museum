import React, { Component } from "react";
import { withBackend } from "../backend/context";

class Login extends Component {
  state = {
    // Swtich between Login and Signup
    login: true,
    email: "",
    password: "",
    name: "",
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? "login" : "sign up"}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Your name"
              autoComplete="off"
              required
            />
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="your 'email address' (any string will work)"
            autoComplete="off"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="choose a safe password"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex mt3">
          <div
            className="pointer mr2 button"
            onClick={() => {
              this.props.backend.login(this.state.email);
              this.props.history.push("/");
            }}
          >
            {login ? "login" : "create account"}
          </div>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </div>
    );
  }
}

export default withBackend(Login);
