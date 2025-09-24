import CartItem from "./CartItem";

const dummyProducts = [
  {
    id: 1,
    title: "Product A",
    price: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    title: "Product B",
    price: 35,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  },
];

export default function CartList() {
  return (
    <div>
      {dummyProducts.map((p) => (
        <CartItem key={p.id} product={p} />
      ))}
    </div>
  );
}
