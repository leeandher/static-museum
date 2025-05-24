import SingleItem from "@/components/SingleItem";
import { useSearchParams } from "next/navigation";

export default function ItemPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <SingleItem id={id} />
    </div>
  );
}
