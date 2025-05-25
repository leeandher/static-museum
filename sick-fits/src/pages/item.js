import SingleItem from "@/components/SingleItem";

export default function ItemPage({ query }) {
  return (
    <div>
      <SingleItem id={query.id} />
    </div>
  );
}
