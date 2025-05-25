import {
  DropDown,
  DropDownItem,
  SearchStyles,
} from "@/components/styles/DropDown";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStore } from "@/backend/context";

export default function Search() {
  const router = useRouter();
  const { state } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const items = state.items
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5);

  return (
    <SearchStyles>
      <div>
        <input
          type="search"
          placeholder="Search!"
          id="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {searchTerm.length > 0 && (
          <DropDown>
            {items.map((item, i) => (
              <DropDownItem
                key={item.id}
                onClick={() => {
                  setSearchTerm("");
                  router.push({
                    pathname: "/item",
                    query: { id: item.id },
                  });
                }}
              >
                <img width="50" src={item.image} alt={item.title} />
                {item.title}
              </DropDownItem>
            ))}
            {items.length === 0 && (
              <DropDownItem>Nothing found for '{searchTerm}'</DropDownItem>
            )}
          </DropDown>
        )}
      </div>
    </SearchStyles>
  );
}
