import CartItem from "./CartItem";

export default function CartList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <CartItem key={p.id} product={p} />
      ))}
    </div>
  );
}
