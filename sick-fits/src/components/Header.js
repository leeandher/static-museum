import Link from "next/link";
import styled from "styled-components";
import NProgress from "nprogress";
import { useRouter } from "next/router";

import Nav from "@/components/Nav";
import Cart from "@/components/Cart";
import Search from "@/components/Search";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.bp}) {
    margin: 0;
    text-align: center;
  }
`;
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${({ theme }) => theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: ${({ theme }) => theme.bp}) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  }
`;

export default function Header() {
  const router = useRouter();

  router.onRouteChangeStart = () => NProgress.start();
  router.onRouteChangeComplete = () => NProgress.done();
  router.onRouteChangeError = () => NProgress.done();

  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </StyledHeader>
  );
}
