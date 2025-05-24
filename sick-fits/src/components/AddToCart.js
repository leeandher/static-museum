import { useStore } from "@/backend/context";

export default function AddToCart({ id }) {
  const { state, dispatch } = useStore();
  const { loading } = state;
  return (
    <button
      onClick={() =>
        dispatch({
          type: "UPDATE_CART",
          cart: [...state.cart, { id, quantity: 1 }],
        })
      }
      disabled={loading}
    >
      Add{loading && "ing"} to 🛒
    </button>
  );
}
