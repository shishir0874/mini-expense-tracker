const ExpenseTable = ({
  expenses,
  onDeleteExpense,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Expense History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Note</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
  {expenses.map((expense) => (
    <tr key={expense.id} className="border-b">
      <td className="py-3">{expense.date}</td>
      <td>{expense.category}</td>
      <td>₹{expense.amount}</td>
      <td>{expense.note}</td>
      <td>
        <button className="mr-2 text-blue-600">
          Edit
        </button>

        <button
  onClick={() => {
    if (
      window.confirm(
        "Delete this expense?"
      )
    ) {
      onDeleteExpense(expense.id);
    }
  }}
  className="text-red-600"
>
  Delete
</button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;