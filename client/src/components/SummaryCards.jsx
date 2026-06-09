const SummaryCards = ({ expenses }) => {
  const totalSpent = expenses.reduce(
  (sum, expense) => sum + expense.amount,
  0
);

const highestExpense =
  expenses.length > 0
    ? Math.max(
        ...expenses.map(
          (expense) => expense.amount
        )
      )
    : 0;

const totalTransactions =
  expenses.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Total This Month</p>
        <h2 className="text-2xl font-bold">₹{totalSpent}</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Highest Expense</p>
        <h2 className="text-2xl font-bold">₹{highestExpense}</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Transactions</p>
        <h2 className="text-2xl font-bold">{totalTransactions}</h2>
      </div>
    </div>
  );
};

export default SummaryCards;