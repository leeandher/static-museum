import Form from "@/components/styles/Form";
import ErrorMessage from "@/components/ErrorMessage";
import { useStore } from "@/backend/context";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateItem() {
  const router = useRouter();
  const { state: storeState, dispatch } = useStore();
  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0,
  });

  const handleChange = ({ target: { name, type, value } }) => {
    const stateValue = type === "number" ? parseFloat(value) : value;
    setState({ [name]: stateValue });
  };

  const { title, description, image, price } = state;
  const { error, loading } = storeState;

  return (
    <Form
      data-test="create"
      onSubmit={async (e) => {
        e.preventDefault();
        const newItem = {
          id: storeState.items.length,
          user: storeState.user,
          ...state,
        };
        dispatch({
          type: "UPDATE_ITEMS",
          items: [...storeState.items, newItem],
        });
        router.push({
          pathname: "/item",
          query: { id: newItem.id },
        });
      }}
    >
      <ErrorMessage error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={handleChange}
            required
          />
          {image.length > 0 && (
            <img
              src={image}
              alt="Upload Preview"
              style={{
                maxWidth: "300px",
                maxHeight: "200px",
                padding: "1rem",
              }}
            />
          )}
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            maxLength={100}
            value={title}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="price">
          Price (US Cents)
          <input
            type="number"
            id="price"
            name="price"
            min={0}
            max={1000000}
            placeholder="Price"
            value={price}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter a Description"
            value={description}
            onChange={handleChange}
            style={{ boxShadow: "none", resize: "vertical" }}
            maxLength={400}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}
