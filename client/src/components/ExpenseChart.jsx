import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExpenseChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce(
    (acc, expense) => {
      acc[expense.category] =
        (acc[expense.category] || 0) +
        expense.amount;

      return acc;
    },
    {}
  );

  const chartData = Object.entries(
    categoryTotals
  ).map(([category, amount]) => ({
    category,
    amount,
  }));

  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">
        Expense Distribution
      </h2>

      <div className="h-64">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={chartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="amount"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;