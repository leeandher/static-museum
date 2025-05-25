import UpdateItem from "@/components/UpdateItem";

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateItem id={query.id} />
    </div>
  );
}
