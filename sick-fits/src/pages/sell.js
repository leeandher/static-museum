import CreateItem from "@/components/CreateItem";
import PleaseSignIn from "@/components/PleaseSignIn";

export default function SellPage() {
  return (
    <div>
      <PleaseSignIn>
        <CreateItem />
      </PleaseSignIn>
    </div>
  );
}
