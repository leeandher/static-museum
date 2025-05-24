import { useStore } from "@/backend/context";
import styled from "styled-components";

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export default function RemoveFromCart({ id }) {
  const { state, dispatch } = useStore();
  const { user } = state;
  if (!user) {
    return null;
  }
  return (
    <BigButton
      title="Delete Item"
      onClick={() => {
        dispatch({
          type: "UPDATE_CART",
          cart: user.cart.filter((item) => item.id !== id),
        });
      }}
    >
      &times;
    </BigButton>
  );
}
