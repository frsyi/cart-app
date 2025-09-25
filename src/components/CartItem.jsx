import { FaStar } from "react-icons/fa";
import Counter from "./Counter";

export default function CartItem({ product, quantity, updateCartQuantity }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition justify-between">
        <div className="flex items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 object-contain rounded-lg p-2 mr-4 bg-gray-50"
          />
          <div>
            <h2 className="font-semibold text-gray-800 line-clamp-1">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 capitalize">
              {product.category}
            </p>
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              <span>{product.rating?.rate} / 5</span>
              <span className="ml-2 text-gray-500 text-xs">
                ({product.rating?.count} reviews)
              </span>
            </div>
            <p className="text-gray-700 font-medium">${product.price}</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <Counter />

          <div className="text-center">
            <p className="text-lg text-gray-500">
              Total:{" "}
              <span className="font-bold text-green-600">${product.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
