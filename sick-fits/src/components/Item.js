import Link from "next/link";

import Title from "@/components/styles/Title";
import ItemStyles from "@/components/styles/ItemStyles";
import PriceTag from "@/components/styles/PriceTag";
import DeleteItem from "@/components/DeleteItem";
import AddToCart from "@/components/AddToCart";

import formatMoney from "@/lib/formatMoney";

export default function Item({ item }) {
  const { state } = useStore();
  const { description, id, image, price, title } = item;
  return (
    <ItemStyles>
      <PriceTag>{formatMoney(price)}</PriceTag>

      <Link href={{ pathname: "item", query: { id: id } }}>
        <a>{image && <img src={image} alt={title} />}</a>
      </Link>
      <Title>
        <Link href={{ pathname: "item", query: { id: id } }}>
          <a>{title}</a>
        </Link>
      </Title>
      <p>{description}</p>
      {state.user && (
        <div className="buttonList">
          <Link href={{ pathname: "update", query: { id: id } }}>
            <button>🔨 Edit 🔨</button>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>🔥 Delete Item 🔥</DeleteItem>
        </div>
      )}
    </ItemStyles>
  );
}
