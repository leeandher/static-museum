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

  const { title, description, image, price } = state;
  const { error, loading } = storeState;

  return (
    <Form
      data-test="create"
      onSubmit={async (e) => {
        e.preventDefault();
        const newItem = {
          id: storeState.items.length + 1,
          user: storeState.user,
          ...state,
          largeImage: state.image,
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
            onChange={(e) => setState({ ...state, image: e.target.value })}
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
            onChange={(e) => setState({ ...state, title: e.target.value })}
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
            onChange={(e) => setState({ ...state, price: e.target.value })}
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
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
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
