import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import Logout from "./Logout";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    storeId: PropTypes.string.isRequired,
  };

  state = {
    uid: null,
    owner: null,
  };

  anonAuthenticate = () => {
    this.setState({
      uid: "anonymous",
      owner: "anonymous",
    });
  };

  logout = async () => {
    this.setState({ uid: null, owner: null });
  };

  render() {
    //Checking the credentials can yield three situations
    //1. If the user isn't logged in, prompt it
    if (!this.state.uid) {
      return <Login anonAuthenticate={this.anonAuthenticate} />;
    }

    //2. If the user is not the owner, prevent inventory changes
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>
            Sorry you are not the owner! <br />
            Try <Link to="/">another store</Link>.
          </p>
          <Logout logout={this.logout} />
        </div>
      );
    }

    //3. If the user is the owner, render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <Logout logout={this.logout} />
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
