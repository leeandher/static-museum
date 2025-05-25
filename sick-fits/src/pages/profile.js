import Profile from "@/components/Profile";
import PleaseSignIn from "@/components/PleaseSignIn";

export default function ProfilePage() {
  return (
    <div>
      <PleaseSignIn>
        <Profile />
      </PleaseSignIn>
    </div>
  );
}
