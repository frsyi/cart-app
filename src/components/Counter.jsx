export default function Counter({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-lg font-bold"
          onClick={onDecrease}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span className="px-3 font-semibold text-gray-800">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-lg font-bold"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}
