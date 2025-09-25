import CartItem from "./CartItem";

export default function CartList({
  products,
  cartQuantity,
  updateCartQuantity,
}) {
  return (
    <div>
      {products.map((p) => (
        <CartItem
          key={p.id}
          product={p}
          quantity={cartQuantity[p.id] || 0}
          updateCartQuantity={updateCartQuantity}
        />
      ))}
    </div>
  );
}
