import { useState } from "react";
import { sampleExpenses } from "../data/sampleExpenses";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import ExpenseFilters from "../components/ExpenseFilters";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";

const Dashboard = () => {
  const [expenses, setExpenses] = useState(sampleExpenses);
  const [editingExpense, setEditingExpense] =
    useState(null);
          const [filters, setFilters] = useState({
  category: "",
  startDate: "",
  endDate: "",
});
    console.log(editingExpense);
  const addExpense = (newExpense) => {
    setExpenses((prev) => [
      {
        id: Date.now(),
        ...newExpense,
      },
      ...prev,
    ]);
  };
  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };
  const editExpense = (expense) => {
    setEditingExpense(expense);
  };
  const updateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );

    setEditingExpense(null);
  };
  const filteredExpenses = expenses.filter((expense) => {
  const categoryMatch =
    !filters.category ||
    expense.category === filters.category;

  const startDateMatch =
    !filters.startDate ||
    expense.date >= filters.startDate;

  const endDateMatch =
    !filters.endDate ||
    expense.date <= filters.endDate;

  return (
    categoryMatch &&
    startDateMatch &&
    endDateMatch
  );
});
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
      </div>
      <Header />

      <SummaryCards expenses={expenses} />

      <ExpenseFilters
  filters={filters}
  setFilters={setFilters}
/>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <ExpenseForm
            onAddExpense={addExpense}
            editingExpense={editingExpense}
            onUpdateExpense={updateExpense}
          />
        </div>

        <div className="lg:col-span-2">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>

      <ExpenseTable
  expenses={filteredExpenses}
  onDeleteExpense={deleteExpense}
  onEditExpense={editExpense}
/>
    </div>
  );
};

export default Dashboard;