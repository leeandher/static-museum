import Form from "@/components/styles/Form";
import { useStore } from "@/backend/context";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UpdateItem({ id }) {
  const router = useRouter();
  const { state, dispatch } = useStore();
  const { items } = state;
  const item = items.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    title: item.title,
    description: item.description,
    price: item.price,
  });

  if (!item) return <p>🤷‍♀️ No Item Found! 🤷‍♂️</p>;
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "UPDATE_ITEMS",
          items: state.items.map((item) =>
            item.id === parseInt(id) ? { ...item, ...formData } : item
          ),
        });
        router.push({
          pathname: "/item",
          query: { id },
        });
      }}
    >
      <fieldset>
        {/* TODO: Implement image editing */}
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            maxLength={100}
            defaultValue={item.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
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
            defaultValue={item.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter a Description"
            defaultValue={item.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            style={{ boxShadow: "none", resize: "vertical" }}
            maxLength={400}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </fieldset>
    </Form>
  );
}
