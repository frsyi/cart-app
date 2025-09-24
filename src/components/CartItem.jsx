import { FaStar } from "react-icons/fa";

export default function CartItem() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition justify-between">
        <div className="flex items-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Product"
            className="w-20 h-20 object-contain rounded-lg p-2 mr-4 bg-gray-50"
          />
          <div>
            <h2 className="font-semibold text-gray-800 line-clamp-1">
              Product
            </h2>
            <p className="text-sm text-gray-500 capitalize">category</p>
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              <span>4 / 5</span>
              <span className="ml-2 text-gray-500 text-xs">(120 reviews)</span>
            </div>
            <p className="text-gray-700 font-medium">$213</p>
          </div>
        </div>
      </div>
    </div>
  );
}
