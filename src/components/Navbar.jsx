import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../store/useCart";

export default function Navbar() {
  const totalItems = useCart((state) => state.getTotalItems());

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a002b] to-[#2a004f] shadow-lg">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">MyStore</h1>

        <button className="relative p-2 rounded-full hover:bg-white/10 transition">
          <MdShoppingCart size={28} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold text-white">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  );
}
