import React, { Component } from "react";
import { withBackend } from "../backend/context";
import Link from "./Link";

class Search extends Component {
  state = { filter: "" };

  render() {
    const links = this.props.store.getFeed({
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

        {links.map((link, i) => (
          <Link key={link.id} link={link} index={i} />
        ))}
      </div>
    );
  }
}

export default withBackend(Search);
