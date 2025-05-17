import React, { Component } from "react";
import Link from "./Link";
import { withBackend } from "../backend/context";
import { LINKS_PER_PAGE } from "../constants";

class LinkList extends Component {
  state = {
    isNewPage: this.props.location.pathname.includes("new"),
    page: parseInt(this.props.match.params.page) || 1,
  };

  componentDidMount() {
    this._generatePage(this.state.page);
  }

  _getLinksToRender = (links) => {
    if (this.props.location.pathname.includes("new")) {
      return links;
    }
    const rankedLinks = links.slice();
    rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length);
    return rankedLinks;
  };

  _previousPage = () => {
    if (this.state.page > 1) {
      const previousPage = this.state.page - 1;
      this._generatePage(previousPage);
    }
  };

  _nextPage = (links) => {
    if (this.state.page <= links.length / LINKS_PER_PAGE) {
      const nextPage = this.state.page + 1;
      this._generatePage(nextPage);
    }
  };

  _generatePage = (page) => {
    this.props.history.push(`/new/${page}`);
    this.setState({
      page,
      skip: this.state.isNewPage ? (page - 1) * LINKS_PER_PAGE : 0,
      first: this.state.isNewPage ? LINKS_PER_PAGE : 100,
    });
  };

  render() {
    const { isNewPage, page } = this.state;
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

    const linksToRender = this._getLinksToRender(links);
    const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;

    return (
      <>
        {linksToRender.map((link, i) => (
          <Link key={link.id} link={link} index={i + pageIndex} />
        ))}
        {isNewPage && (
          <div className="flex ml4 mv3 gray pagination">
            <div className="pointer mr2" onClick={this._previousPage}>
              previous
            </div>
            <div className="pointer" onClick={() => this._nextPage(links)}>
              next
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withBackend(LinkList);
