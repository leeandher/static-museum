import SignIn from "@/components/SignIn";
import { useStore } from "@/backend/context";

export default function PleaseSignIn({ children }) {
  const { state } = useStore();
  const { user } = state;

  if (user) {
    return children;
  }
  return (
    <div>
      <SignIn samePage header="Sign in to continue" />
    </div>
  );
}
