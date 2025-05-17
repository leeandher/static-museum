import React, { Component } from "react";
import { withBackend } from "../backend/context";
import Link from "./Link";
import { LINKS_PER_PAGE } from "../constants";

class Search extends Component {
  state = { filter: "" };

  render() {
    const links = this.props.backend.getFeed({
      filter: this.state.filter,
    });

    return (
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ filter: e.target.value })}
            placeholder="search for something"
          />
        </div>

        {links.slice(0, LINKS_PER_PAGE).map((link, i) => (
          <Link key={link.id} link={link} index={i} />
        ))}
      </div>
    );
  }
}

export default withBackend(Search);
