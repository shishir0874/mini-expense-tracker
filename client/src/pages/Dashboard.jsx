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
  return (
    <div className="min-h-screen bg-slate-100">
  <div className="max-w-7xl mx-auto p-6 space-y-6">
    </div>
      <Header />

      <SummaryCards />

      <ExpenseFilters />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <ExpenseForm />
        </div>

        <div className="lg:col-span-2">
          <ExpenseChart />
        </div>
      </div>

      <ExpenseTable expenses={expenses}  />
    </div>
  );
};

export default Dashboard;