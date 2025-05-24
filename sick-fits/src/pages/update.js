import UpdateItem from "@/components/UpdateItem";
import { useSearchParams } from "next/navigation";

export default function UpdatePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <UpdateItem id={id} />
    </div>
  );
}
