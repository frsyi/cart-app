import { useCart } from "../store/useCart";

export default function FloatingCheckoutBar({ onCheckout }) {
  const totalItems = useCart((state) => state.getTotalItems());
  const grandTotal = useCart((state) => state.getGrandTotal());

  if (totalItems <= 0) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
      bg-white border border-gray-200 rounded-xl 
      shadow-xl ring-1 ring-purple-200/60 z-40 
      hover:shadow-2xl hover:ring-[#2a004f]/40 transition-all duration-300"
    >
      <div className="flex justify-between items-center p-4">
        <p className="font-bold text-gray-800">
          {totalItems} item{totalItems > 1 ? "s" : ""} •{" "}
          <span className="text-green-600 font-semibold">
            ${grandTotal.toFixed(2)}
          </span>
        </p>
        <button
          onClick={onCheckout}
          className="px-6 py-2 bg-[#2a004f] text-white font-medium rounded-lg hover:bg-[#0a002b] transition shadow-md cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
