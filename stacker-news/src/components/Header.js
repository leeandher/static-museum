import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { withBackend } from "../backend/context";

const Header = ({ history }) => {
  return (
    <header className="flex pa1 justify-between nowrap orange head">
      <div className="flex flex-fixed black">
        <img src="/favicon.ico" alt="Stacker News Logo" className="icon" />
        <div className="fw7 mr1 title">Stacker News</div>
        <Link to="/" className="ml1 no-underline black direct">
          new
        </Link>
        <div className="ml1 split">|</div>
        <Link to="/top" className="ml1 no-underline black direct">
          top
        </Link>
        <div className="ml1 split">|</div>
        <Link to="/search" className="ml1 no-underline black direct">
          search
        </Link>
        <div className="ml1 split">|</div>
        <Link to="/create" className="ml1 no-underline black direct">
          submit
        </Link>
      </div>
      <div className="flex flex-fixed">
        {this.props.backend.user ? (
          <span
            className="logout black"
            onClick={() => {
              this.props.backend.logout();
              history.push("/new/1");
            }}
          >
            logout
          </span>
        ) : (
          <Link to="/login" className="ml1 no-underline black direct">
            login
          </Link>
        )}
      </div>
    </header>
  );
};
export default withRouter(withBackend(Header));
