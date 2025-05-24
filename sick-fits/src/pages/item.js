import SingleItem from "@/components/SingleItem";
import Page from "@/components/Page";

const ItemPage = ({ query }) => (
  <Page>
    <SingleItem id={query.id} />
  </Page>
);

export default ItemPage;
