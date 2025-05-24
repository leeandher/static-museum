import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import PaginationStyles from "@/components/styles/PaginationStyles";
import { PER_PAGE } from "@/config";
import { useStore } from "@/backend/context";

const StylishSpan = styled.span`
  color: ${({ theme }) => theme.black};
  cursor: pointer;
`;

export default function Pagination({ page }) {
  const { state } = useStore();
  const count = state.items.length;
  const pages = Math.ceil(count / PER_PAGE);
  if (count === 0) return null;
  return (
    <PaginationStyles data-test="pagination">
      <Head>
        <title>
          Sick Fits | Page {page} of {pages}
        </title>
      </Head>
      <Link
        prefetch
        href={{
          pathname: "items",
          query: { page: page - 1 },
        }}
      >
        <StylishSpan className="prev" aria-disabled={page <= 1}>
          ← Prev
        </StylishSpan>
      </Link>
      <p>
        Page {page} of {pages}
      </p>
      <p>{count} Items Total</p>
      <Link
        prefetch
        href={{
          pathname: "items",
          query: { page: page + 1 },
        }}
      >
        <StylishSpan className="next" aria-disabled={page >= pages}>
          Next →
        </StylishSpan>
      </Link>
    </PaginationStyles>
  );
}
