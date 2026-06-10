import { useState, useEffect } from "react";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import ExpenseFilters from "../components/ExpenseFilters";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";
import {
  getExpenses,
  createExpense,
  deleteExpense as deleteExpenseApi,
  updateExpense as updateExpenseApi,
} from "../services/expenseService";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] =
    useState(null);
          const [filters, setFilters] = useState({
  category: "",
  startDate: "",
  endDate: "",
});
  const addExpense = async (newExpense) => {
  try {
    await createExpense(newExpense);

    fetchExpenses();
  } catch (error) {
    console.error(
      "Failed to create expense:",
      error
    );
  }
};
  const deleteExpense = async (id) => {
  try {
    await deleteExpenseApi(id);

    fetchExpenses();
  } catch (error) {
    console.error(
      "Failed to delete expense:",
      error
    );
  }
};
  const editExpense = (expense) => {
    setEditingExpense(expense);
  };
  const updateExpense = async (updatedExpense) => {
  try {
    await updateExpenseApi(
      updatedExpense.id,
      updatedExpense
    );

    fetchExpenses();
    setEditingExpense(null);
  } catch (error) {
    console.error(error);
  }
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
useEffect(() => {
  fetchExpenses();
}, []);

const fetchExpenses = async () => {
  try {
    const response =
      await getExpenses();

    setExpenses(response.data);
  } catch (error) {
    console.error(
      "Failed to fetch expenses:",
      error
    );
  }
};
console.log(expenses);
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