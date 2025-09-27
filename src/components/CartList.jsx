import CartItem from "./CartItem";
import { useCart } from "../store/useCart";

export default function CartList() {
  const products = useCart((state) => state.products);

  if (products.length === 0) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  return (
    <div>
      {products.map((p) => (
        <CartItem key={p.id} product={p} />
      ))}
    </div>
  );
}
