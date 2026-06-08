import { categories } from "../utils/categories";

const ExpenseForm = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Add Expense
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          className="w-full border rounded-lg p-2"
        />

        <select className="w-full border rounded-lg p-2">
          <option>Select Category</option>

          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="w-full border rounded-lg p-2"
        />

        <textarea
          placeholder="Note (optional)"
          className="w-full border rounded-lg p-2"
          rows="3"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm; 