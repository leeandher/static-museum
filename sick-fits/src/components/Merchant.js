import { useRouter } from "next/router";
import NProgress from "nprogress";

import calcTotalPrice from "@/lib/calcTotalPrice";

export default function Merchant({ children }) {
  const router = useRouter();
  const { state } = useStore();
  const { user: me } = state;
  const totalItems = (cart) => {
    return me.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };
  const onToken = async ({ id }, createOrder) => {
    NProgress.start();
    // Parse the stripe ID and send it server side to perform the transaction
    const { data } = await createOrder({
      variables: { token: id },
    }).catch((err) => alert(err.message));
    router.push({
      pathname: "/order",
      query: { id: data.createOrder.id },
    });
  };

  if (!me) return null;

  return (
    <div>StripeCheckout</div>
    // <Mutation
    //   mutation={CREATE_ORDER_MUTATION}
    //   refetchQueries={[
    //     { query: CURRENT_USER_QUERY },
    //     { query: USER_ORDERS_QUERY },
    //   ]}
    // >
    //   {(createOrder) => (
    //     <StripeCheckout
    //       amount={calcTotalPrice(me.cart)}
    //       name="Sick Fits"
    //       description={`Order of ${this.totalItems(me.cart)} sick items!`}
    //       image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
    //       stripeKey={STRIPE_KEY}
    //       currency="USD"
    //       email={me.email}
    //       token={(res) => this.onToken(res, createOrder)}
    //     >
    //       {children}
    //     </StripeCheckout>
    //   )}
    // </Mutation>
  );
}
