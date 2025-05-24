import React, { Component } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Meta from "@/components/Meta";
import theme from "@/components/styles/_palette";
import { StoreProvider } from "@/backend/context";

const StyledPage = styled.div`
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Themer = dynamic(
  () => import("styled-components").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);

class Page extends Component {
  render() {
    return (
      <StoreProvider>
        <Themer theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </Themer>
      </StoreProvider>
    );
  }
}

export default Page;
