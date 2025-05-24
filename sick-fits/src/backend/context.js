import { createContext, useContext, useReducer } from "react";
import { USER, ITEMS } from "@/backend/data";

const StoreContext = createContext(null);

function storeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "UPDATE_USER":
      return { ...state, user: action.user };
    case "UPDATE_CART":
      return {
        ...state,
        cartOpen: true,
        user: {
          ...state.user,
          cart: action.cart,
        },
      };
    case "UPDATE_ITEMS":
      return {
        ...state,
        items: action.items,
      };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, {
    user: USER,
    items: ITEMS,
    cartOpen: false,
    loading: false,
    error: null,
  });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (ctx === null) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return ctx;
}
