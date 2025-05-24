import styled from "styled-components";

import RemoveFromCart from "@/components/RemoveFromCart";
import formatMoney from "@/lib/formatMoney";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
  span {
    margin-right: 10px;
    width: 100px;
    text-align: center;
    font-size: 2rem;
  }
`;

export default function CartItem({ cartItem: { id, item, quantity } }) {
  if (!item) {
    return (
      <CartItemStyles>
        <span role="img" aria-label="shrug">
          ❌🛒❌
        </span>
        <p>
          The previously saved item is no longer available. Sorry about that!
        </p>
        <RemoveFromCart id={id} />
      </CartItemStyles>
    );
  }
  return (
    <CartItemStyles>
      <img width="100" src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>
          <strong>{formatMoney(item.price * quantity)}</strong>
          {" - "}
          <em>
            {quantity} &times; {formatMoney(item.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={id} />
    </CartItemStyles>
  );
}
