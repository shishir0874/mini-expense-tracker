import { categories } from "../utils/categories";

const ExpenseFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="border rounded-lg p-2">
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border rounded-lg p-2"
        />

        <input
          type="date"
          className="border rounded-lg p-2"
        />

        <button
          className="bg-slate-700 text-white rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ExpenseFilters;