import { useRouter } from "next/router";
import { useStore } from "@/backend/context";

export default function SignOut() {
  const { dispatch } = useStore();
  const router = useRouter();
  return (
    <a
      onClick={(e) => {
        dispatch({ type: "UPDATE_USER", user: null });
        router.push("/signup");
      }}
    >
      Sign Out
    </a>
  );
}
