import styled from "styled-components";
import { formatDistance } from "date-fns";
import formatMoney from "@/lib/formatMoney";
import Head from "next/head";
import Link from "next/link";
import { useStore } from "@/backend/context";
import OrderItemStyles from "@/components/styles/OrderItemStyles";
import ErrorMessage from "@/components/ErrorMessage";

const ListWrap = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;
const MainWrap = styled.div`
  h2 {
    text-align: center;
    span {
      padding: 1rem;
      background: ${({ theme }) => theme.red};
      color: white;
      line-height: 1;
      transform: skew(-6deg);
      display: inline-block;
    }
  }
`;

export default function OrderList() {
  const { state } = useStore();
  const { error, loading } = state;
  const orders = state.user.orders;

  if (loading) return <p>⚡ Loading... ⚡</p>;
  if (error) return <ErrorMessage error={error} />;
  const itemCount = (order) => {
    return order.items.reduce((total, item) => total + item.quantity, 0);
  };
  const productCount = (order) => order.items.length;
  return (
    <MainWrap>
      <Head>
        <title>Sick Fits - Orders</title>
      </Head>
      <h2>
        You have <span>{orders.length}</span> order
        {orders.length !== 1 && "s"}!
      </h2>
      <ListWrap>
        {orders.map((order) => (
          <OrderItemStyles key={order.id}>
            <Link
              href={{ pathname: "order", query: { id: order.id } }}
              key={order.id}
            >
              <div className="order-meta">
                <p>
                  {itemCount(order)} Item
                  {itemCount(order) !== 1 && "s"}
                </p>
                <p>
                  {productCount(order)} Product
                  {productCount(order) !== 1 && "s"}
                </p>
                <p>{formatDistance(Date.parse(order.createdAt), new Date())}</p>
                <p>{formatMoney(order.total)}</p>
              </div>
              <div className="images">
                {order.items.map((item) => (
                  <img src={item.image} alt={item.title} key={item.id} />
                ))}
              </div>
            </Link>
          </OrderItemStyles>
        ))}
      </ListWrap>
    </MainWrap>
  );
}
