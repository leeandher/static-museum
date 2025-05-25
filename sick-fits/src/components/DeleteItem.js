import { useStore } from "@/backend/context";
import { useRouter } from "next/router";

export default function DeleteItem({ children, id }) {
  const { state, dispatch } = useStore();
  const router = useRouter();
  if (!state.user) {
    return null;
  }
  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) {
          dispatch({
            type: "UPDATE_ITEMS",
            items: state.items.filter((item) => item.id !== id),
          });
          router.push({
            pathname: "/items",
          });
        }
      }}
    >
      {children}
    </button>
  );
}
