import { format } from "date-fns";
import Head from "next/head";
import formatMoney from "@/lib/formatMoney";
import ErrorMessage from "@/components/ErrorMessage";
import OrderStyles from "@/components/styles/OrderStyles";
import { useStore } from "@/backend/context";
import { useRouter } from "next/router";

export default function Order({ id }) {
  const { state } = useStore();
  const router = useRouter();
  const { error, loading, user } = state;
  const order = user.orders.find((order) => order.id === id);
  if (!order) {
    router.push("/");
  }

  if (loading) return <p>⚡ Loading... ⚡</p>;
  if (error) return <ErrorMessage error={error} />;
  return (
    <OrderStyles data-test="order">
      <Head>
        <title>Sick Fits - Order {order.id}</title>
      </Head>
      <p>
        <span>Order ID:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Date:</span>
        <span>{format(Date.parse(order.createdAt), "MMMM d, YYY h:mm a")}</span>
      </p>
      <p>
        <span>Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Items:</span>
        <span>
          {order.items.length} unique,{" "}
          {order.items.reduce((total, item) => item.quantity + total, 0)} total
        </span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>SubTotal: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}
