import { useRouter } from "next/router";
import { useStore } from "@/backend/context";
import styled from "styled-components";
import calcTotalPrice from "@/lib/calcTotalPrice";

const SubmitButton = styled.button`
  font-family: "radnika_next";
  outline: none;
  border: none;
  background: ${(props) => props.theme.red};
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 2rem;
`;

export default function Merchant({ children }) {
  const router = useRouter();
  const { state, dispatch } = useStore();
  const { user: me } = state;

  if (!me) return null;

  return (
    <SubmitButton
      onClick={() => {
        const newOrder = {
          items: me.cart.map(({ item, ...cartItem }) => ({
            ...cartItem,
            ...item,
          })),
          total: calcTotalPrice(me.cart),
          createdAt: new Date(),
          id: `SICK-FITS-${me.orders.length + 1}`,
          charge: `ch_${me.orders.length + 1}`,
        };
        dispatch({
          type: "UPDATE_USER",
          user: {
            ...me,
            orders: [...me.orders, newOrder],
            cart: [],
          },
        });
        dispatch({
          type: "TOGGLE_CART",
        });

        router.push({
          pathname: "/order",
          query: { id: newOrder.id },
        });
      }}
    >
      BUY BUY BUY
    </SubmitButton>
  );
}
