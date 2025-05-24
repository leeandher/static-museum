import styled from "styled-components";
import Link from "next/link";

import Item from "@/components/Item";
import Pagination from "@/components/Pagination";
import { useStore } from "@/backend/context";
import { PER_PAGE } from "@/config";

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
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

export default function Items({ page }) {
  const { state } = useStore();
  const { items, loading, error } = state;

  const paginatedItems = items.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <Center>
      <Pagination page={page} />
      {loading && (
        <p>
          ⚡ Loading (not really, this is all static data, but imagine!)... ⚡
        </p>
      )}
      {error && <p>❌ Error ❌: {error.message}</p>}
      <MainWrap>
        {items.length === 0 && (
          <h2>
            There aren't any items in the shop right now!
            <br />
            <Link href="/sell">
              <span>Selling something?</span>
            </Link>
          </h2>
        )}
        <ItemsList>
          {paginatedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ItemsList>
      </MainWrap>
      <Pagination page={page} />
    </Center>
  );
}
