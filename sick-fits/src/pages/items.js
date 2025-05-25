import Items from "@/components/Items";

export default function ItemsPage({ query }) {
  return (
    <div>
      <Items page={parseInt(query.page) || 1} />
    </div>
  );
}
