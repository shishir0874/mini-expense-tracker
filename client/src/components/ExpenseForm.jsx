import { useState } from "react";
import { categories } from "../utils/categories";

const ExpenseForm = ({ onAddExpense }) => {
  console.log("onAddExpense =", onAddExpense);
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("handleSubmit running");
    if (
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    onAddExpense({
      amount: Number(formData.amount),
      category: formData.category,
      date: formData.date,
      note: formData.note,
    });

    setFormData({
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Add Expense
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-full border rounded-lg p-2"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Note (optional)"
          className="w-full border rounded-lg p-2"
          rows="3"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm; 