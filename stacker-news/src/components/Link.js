import React, { Component } from "react";
import { withBackend } from "../backend/context";
import { timeDifferenceForDate } from "../utils";

class Link extends Component {
  render() {
    const actualLink = /^http(|s):\/\//.test(this.props.link.url)
      ? this.props.link.url
      : `http://${this.props.link.url}`;
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
          {this.props.backend.user && (
            <div
              className="ml1 gray f11 click"
              onClick={() => {
                this.props.backend.vote(this.props.link.id);
              }}
            >
              ▲
            </div>
          )}
        </div>
        <div className="ml1">
          <a
            className="link"
            href={actualLink}
            title={this.props.link.description}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.link.description}{" "}
            <span className="url gray">({this.props.link.url})</span>
          </a>
          <div className="f6 lh-copy gray">
            {this.props.link.votes.length} votes | by{" "}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : "Anonymous"}{" "}
            {timeDifferenceForDate(this.props.link.createdAt)}
          </div>
        </div>
      </div>
    );
  }
}

export default withBackend(Link);
