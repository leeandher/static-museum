import PleaseSignIn from "@/components/PleaseSignIn";
import Order from "@/components/Order";

export default function OrderPage({ query }) {
  return (
    <div>
      <PleaseSignIn>
        <Order id={query.id} />
      </PleaseSignIn>
    </div>
  );
}
