import { StoreProvider } from "@/backend/context";
import Page from "@/components/Page";
import { useSearchParams } from "next/navigation";

export default function App({ Component, pageProps }) {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  return (
    <StoreProvider>
      <Page>
        <Component {...pageProps} query={query} />
      </Page>
    </StoreProvider>
  );
}
