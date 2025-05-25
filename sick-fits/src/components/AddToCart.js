import { useStore } from "@/backend/context";

export default function AddToCart({ id }) {
  const { state, dispatch } = useStore();
  const cart = state.user?.cart ?? [];
  const { loading } = state;
  const item = state.items.find((item) => item.id === id);
  const hasItem = cart.find((item) => item.id === id);
  if (!state.user) {
    return null;
  }

  return (
    <button
      onClick={() =>
        dispatch({
          type: "UPDATE_CART",
          cart: hasItem
            ? cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              )
            : [...cart, { id, item, quantity: 1 }],
        })
      }
      disabled={loading}
    >
      <b>Add{loading && "ing"} to 🛒</b>
    </button>
  );
}
