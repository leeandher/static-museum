import OrderList from "@/components/OrderList";
import PleaseSignIn from "@/components/PleaseSignIn";

export default function OrdersPage() {
  return (
    <div>
      <PleaseSignIn>
        <OrderList />
      </PleaseSignIn>
    </div>
  );
}
