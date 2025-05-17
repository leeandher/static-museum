import React, { Component } from "react";
import { withBackend } from "../backend/context";

class CreateLink extends Component {
  state = {
    description: "",
    url: "",
  };

  render() {
    const { description, url } = this.state;
    return (
      <>
        <h4 className="mv3">submit</h4>
        <div className="flex flex-column mt3">
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder="description"
            autoComplete="off"
          />
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => this.setState({ url: e.target.value })}
            placeholder="url"
            autoComplete="off"
          />
        </div>
        <div className="flex mt3">
          <button
            className="pointer button"
            onClick={() => {
              this.props.backend.createLink(description, url);
              this.props.history.push("/new/1");
            }}
          >
            submit
          </button>
        </div>
      </>
    );
  }
}

export default withBackend(CreateLink);
