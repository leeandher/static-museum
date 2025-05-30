import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import formatMoney from "@/lib/formatMoney";
import ErrorMessage from "@/components/ErrorMessage";
import DeleteItem from "@/components/DeleteItem";
import AddToCart from "@/components/AddToCart";
import { useStore } from "@/backend/context";

const SingleItemStyles = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 400px;
  img {
    width: 100%;
    height: 100%;
    padding: 15px;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    grid-row: 1;
    font-size: 2rem;
  }
  .stylish {
    span {
      padding: 1rem;
      background: ${({ theme }) => theme.red};
      color: white;
      line-height: 1;
      transform: skew(-6deg);
      display: inline-block;
    }
  }
  .big {
    font-size: 40px;
  }

  .buttonList {
    display: grid;
    grid-row: 2;
    grid-column: 1 / 3;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.lightGrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${(props) => props.theme.lightGrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1.25rem;
      padding: 1rem;
    }
  }
`;

export default function SingleItem({ id }) {
  const { state } = useStore();
  const { error, loading, items } = state;
  const item = items.find((item) => item.id === parseInt(id));

  if (loading) {
    return <p>⚡ Loading... ⚡</p>;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (!item) {
    return <p>🤷‍♀️ No Item Found! 🤷‍♂️</p>;
  }

  return (
    <SingleItemStyles>
      <Head>
        <title> Sick Fits | {item.title}</title>
      </Head>
      <img src={item.largeImage} alt={item.title} />
      <div className="details">
        <h2>{item.title}</h2>
        <p> {item.description}</p>
        <p className="stylish big">
          <span>{formatMoney(item.price)}</span>
        </p>
      </div>
      {state.user ? (
        <div className="buttonList">
          <Link href={{ pathname: "update", query: { id: id } }}>
            🔨 Edit 🔨
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>🔥 Delete Item 🔥</DeleteItem>
        </div>
      ) : (
        <div className="buttonList">
          <Link href="/signup">🔐 Sign in to Add 2 Cart 🛒</Link>
        </div>
      )}
    </SingleItemStyles>
  );
}
