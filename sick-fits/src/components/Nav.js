import Link from "next/link";
import SignOut from "@/components/SignOut";
import CartCount from "@/components/CartCount";
import NavStyles from "@/components/styles/NavStyles";

import { useStore } from "@/backend/context";

export default function Nav() {
  const { state, dispatch } = useStore();
  const { user: me } = state;
  return (
    <NavStyles data-test="nav">
      <Link href="/items">
        <a>Shop</a>
      </Link>
      {me && (
        <>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
          <Link href="/orders">
            <a>Orders</a>
          </Link>
          <Link href="/me">
            <a>Account</a>
          </Link>
          <SignOut />
          <button onClick={() => dispatch({ type: "TOGGLE_CART" })}>
            My Cart
            <CartCount
              count={me.cart.reduce(
                (total, { quantity, item }) =>
                  !item ? total : total + quantity,
                0
              )}
            />
          </button>
        </>
      )}
      {!me && (
        <Link href="/signup">
          <a>Sign In</a>
        </Link>
      )}
    </NavStyles>
  );
}
