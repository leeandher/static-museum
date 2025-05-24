export default function AddToCart({ id }) {
  const addToCart = () => {
    console.log(`${id} added to cart`);
  };
  return (
    <button onClick={addToCart} disabled={loading}>
      Add{loading && "ing"} to 🛒
    </button>
  );
}
