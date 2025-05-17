import React, { Component } from "react";
import { INITIAL_LINKS } from "./data";

const BackendContext = React.createContext();

const initialLinks = INITIAL_LINKS.map((link, index) => {
  return {
    ...link,
    id: index + 1,
    createdAt: new Date(
      Date.now() - 1000 * 60 * Math.random() * 150
    ).toISOString(),
  };
});

export const withBackend = (WrappedComponent) => {
  return class withBackend extends Component {
    static contextType = BackendContext;
    render() {
      return <WrappedComponent {...this.props} backend={this.context} />;
    }
  };
};

export class BackendProvider extends Component {
  constructor(props) {
    super(props);
    const savedLinks = localStorage.getItem("links");
    const savedUser = localStorage.getItem("user");
    this.state = {
      links: savedLinks ? JSON.parse(savedLinks) : initialLinks,
      user: savedUser ? JSON.parse(savedUser) : null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.links !== this.state.links) {
      localStorage.setItem("links", JSON.stringify(this.state.links));
    }
    if (prevState.user !== this.state.user) {
      localStorage.setItem("user", JSON.stringify(this.state.user));
    }
  }

  isLoggedIn = () => {
    return !!localStorage.getItem("user");
  };

  login = (email) => {
    this.setState({ user: { id: 1, email } });
  };

  logout = () => {
    this.setState({ user: null });
  };

  createLink = (description, url) => {
    if (!this.state.user) {
      return null;
    }

    const newLink = {
      id: Date.now().toString(),
      description,
      url,
      createdAt: new Date().toISOString(),
      postedBy: { id: this.state.user, name: "Anonymous" },
      votes: [],
    };

    this.setState((prevState) => ({
      links: [newLink, ...prevState.links],
    }));

    return newLink;
  };

  vote = (linkId) => {
    if (!this.state.user) {
      return null;
    }

    this.setState((prevState) => ({
      links: prevState.links.map((link) => {
        if (link.id === linkId) {
          const hasVoted = link.votes.some((vote) => vote.user.id === "1");
          if (hasVoted) return link;

          const newVote = {
            id: Date.now().toString(),
            user: { id: "1", name: "Anonymous" },
          };

          return {
            ...link,
            votes: [...link.votes, newVote],
          };
        }
        return link;
      }),
    }));
  };

  getFeed = ({ filter = "", orderDesc = false }) => {
    let filteredLinks = [...this.state.links];

    if (filter) {
      const searchTerm = filter.toLowerCase();
      filteredLinks = filteredLinks.filter(
        (link) =>
          link.description.toLowerCase().includes(searchTerm) ||
          link.url.toLowerCase().includes(searchTerm)
      );
    }

    if (orderDesc) {
      filteredLinks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    return filteredLinks;
  };

  render() {
    return (
      <BackendContext.Provider
        value={{
          links: this.state.links,
          createLink: this.createLink,
          vote: this.vote,
          getFeed: this.getFeed,
          user: this.state.user,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </BackendContext.Provider>
    );
  }
}
