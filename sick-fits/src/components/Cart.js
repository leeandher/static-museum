import CartItem from "@/components/CartItem";
import Merchant from "@/components/Merchant";
import CartStyles from "@/components/styles/CartStyles";
import Supreme from "@/components/styles/Supreme";
import CloseButton from "@/components/styles/CloseButton";
import SickButton from "@/components/styles/SickButton";

import calcTotalPrice from "@/lib/calcTotalPrice";
import formatMoney from "@/lib/formatMoney";
import { useStore } from "@/backend/context";

export default function Cart() {
  const { state, dispatch } = useStore();
  const { cartOpen, user: me } = state;
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <CloseButton
          title="close"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        >
          &times;
        </CloseButton>
        <Supreme>
          {`${me.name}${me.name.endsWith("s") ? "'" : "'s"} `}🛒
        </Supreme>
        <p>
          You have {me.cart.length} item
          {me.cart.length !== 1 && "s"} in your cart.
        </p>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}>
            {cartItem.id}
          </CartItem>
        ))}
      </ul>
      {me.cart.length ? (
        <footer>
          <p>{formatMoney(calcTotalPrice(me.cart))}</p>
          <Merchant>
            <SickButton>Checkout</SickButton>
          </Merchant>
        </footer>
      ) : null}
    </CartStyles>
  );
}
