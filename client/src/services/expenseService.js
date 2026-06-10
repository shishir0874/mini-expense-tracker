import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/expenses`;

export const getExpenses = () =>
  axios.get(API_URL);

export const createExpense = (expense) =>
  axios.post(API_URL, expense);

export const updateExpense = (id, expense) =>
  axios.put(`${API_URL}/${id}`, expense);

export const deleteExpense = (id) =>
  axios.delete(`${API_URL}/${id}`);