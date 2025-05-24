import { StoreProvider } from "@/backend/context";
import Page from "@/components/Page";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </StoreProvider>
  );
}
