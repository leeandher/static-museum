import { useStore } from "@/backend/context";

export default function DeleteItem({ children, id }) {
  const { state, dispatch } = useStore();
  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) {
          dispatch({
            type: "UPDATE_ITEMS",
            items: state.items.filter((item) => item.id !== id),
          });
        }
      }}
    >
      {children}
    </button>
  );
}
