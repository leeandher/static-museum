import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired,
  };

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    };
    this.props.addFish(fish);

    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="FishName"
          required
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price (Cents)"
          required
        />
        <select name="status" ref={this.statusRef} required>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Fish Description"
          required
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image (URL)"
          required
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
