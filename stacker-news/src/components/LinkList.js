import React, { Component } from "react";
import Link from "./Link";
import { withBackend } from "../backend/context";
import { LINKS_PER_PAGE } from "../constants";

class LinkList extends Component {
  state = {
    page: parseInt(this.props.match.params.page) || 1,
  };

  _getLinksToRender = (links, page) => {
    if (this.props.location.pathname.includes("new")) {
      return links.slice((page - 1) * LINKS_PER_PAGE, page * LINKS_PER_PAGE);
    }
    const rankedLinks = links.slice();
    rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length);
    return rankedLinks.slice(0, LINKS_PER_PAGE);
  };

  _previousPage = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  _nextPage = (links) => {
    if (this.state.page <= links.length / LINKS_PER_PAGE) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    const isNewPage = this.props.location.pathname.includes("new");
    const page = isNewPage ? this.state.page : 1;
    const links = this.props.backend.getFeed({
      orderDesc: isNewPage,
      page,
    });

    if (links.length === 0) {
      return (
        <div className="indicator">
          <span role="img" aria-label="nope">
            😵
          </span>
          Nothing! Try lowering that page number a bit eh?
          <span role="img" aria-label="nope">
            😵
          </span>
        </div>
      );
    }

    const linksToRender = this._getLinksToRender(links, page);
    const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;

    return (
      <>
        {linksToRender.map((link, i) => (
          <Link key={link.id} link={link} index={i + pageIndex} />
        ))}
        {isNewPage && (
          <div className="flex ml4 mv3 gray pagination">
            <div
              className="pointer mr2"
              style={{ textDecoration: page === 1 ? "none" : "underline" }}
              onClick={this._previousPage}
            >
              previous
            </div>
            <div
              className="pointer"
              onClick={() => this._nextPage(links)}
              style={{
                textDecoration:
                  linksToRender.length < LINKS_PER_PAGE ? "none" : "underline",
              }}
            >
              next
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withBackend(LinkList);
