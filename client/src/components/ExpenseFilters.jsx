import { categories } from "../utils/categories";

const ExpenseFilters = ({
  filters,
  setFilters,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({
              ...filters,
              category: e.target.value,
            })
          }
          className="border rounded-lg p-2"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({
              ...filters,
              startDate: e.target.value,
            })
          }
          className="border rounded-lg p-2"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({
              ...filters,
              endDate: e.target.value,
            })
          }
          className="border rounded-lg p-2"
        />

        <button
          onClick={() =>
            setFilters({
              category: "",
              startDate: "",
              endDate: "",
            })
          }
          className="bg-slate-700 text-white rounded-lg px-4 py-2 hover:bg-slate-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ExpenseFilters;