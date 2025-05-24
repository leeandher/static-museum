import PleaseSignIn from "@/components/PleaseSignIn";
import Order from "@/components/Order";
import { useSearchParams } from "next/navigation";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <PleaseSignIn>
        <Order id={id} />
      </PleaseSignIn>
    </div>
  );
}
