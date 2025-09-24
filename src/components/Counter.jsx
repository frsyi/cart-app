export default function Counter() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-lg font-bold">
          -
        </button>
        <span className="px-3 font-semibold text-gray-800">1</span>
        <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 text-lg font-bold">
          +
        </button>
      </div>
    </div>
  );
}
